import React, { Fragment, useState, useEffect } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function Editor ({ note, updateNote }) {
    const [currentContent, setCurrentContent] = useState("");
    const [timer, setTimer] = useState(null);

    const updateLastContent = (content) => {
        const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30);
        updateNote(note, { "title": title, body: content });
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