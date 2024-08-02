import React, { Fragment, useState, useEffect } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function Editor ({ note, updateNote }) {
    const [currentContent, setCurrentContent] = useState("");
    const [timer, setTimer] = useState(null);

    const updateLastContent = (content) => {
        // Encontrar a posição da primeira ocorrência de <br>
        const brIndex = content.indexOf('<br>');

        let title = '';
        if (brIndex !== -1) {
            // Obter as primeiras 15 letras antes do <br>
            title = content.substring(0, brIndex).replace(/(<([^>]+)>)/ig, "").slice(0, 15);
        } else {
            // Se não houver <br>, considerar as primeiras 15 letras do conteúdo
            title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 15);
        }

        updateNote(note, { title: title, body: content });
    }

    const handleChange = (content, delta, source) => {
        clearTimeout(timer);
        if (source === "user") {
            setCurrentContent(content);
            setTimer(setTimeout(() => updateLastContent(content), 2000));
        }
    }

    useEffect(() => {
        setCurrentContent(note.body);
    }, [note]);

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
            ['clean']
        ]
    }

    return (
        <Fragment>
            <ReactQuill value={currentContent} modules={modules} onChange={handleChange}/>
        </Fragment>
    );
};
 
export default Editor;