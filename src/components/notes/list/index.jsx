import { Fragment } from "react";
import { Button, Column, Tag, Title, List } from "rbx";
import Moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListNotes({ notes, selectNote, current_note, createNote, deleteNote }) {
    return (
        <Fragment>
            <Column.Group breakpoint="mobile">
                <Column size={6} offset={1}>
                    <Title size={6}>
                        {notes.length} Notes
                    </Title>
                </Column>
                <Column size={2}>
                    <Button state="active" color="custom-purple" textColor="custom-purple" outlined size="small" onClick={() => createNote()}>
                        New +
                    </Button>
                </Column>
            </Column.Group>
            <List className="notes-list">
                {notes.map((item, key) => {
                    const stripHtml = (html) => {
                        const div = document.createElement('div');
                        div.innerHTML = html;
                        return div.textContent || div.innerText || '';
                    };

                    const brIndex = item.body.indexOf('<br>');
                    let bodyContent = '';

                    if (brIndex !== -1) {
                        bodyContent = item.body.substring(brIndex + 4);
                    }

                    const cleanBodyContent = stripHtml(bodyContent).substring(0, 35);

                    return (
                        <List.Item 
                            key={key}
                            className={`list-item ${current_note._id === item._id ? 'is-active' : ''}`} 
                            onClick={() => selectNote(item._id)}>
                            <Title size={6} className="note-title">
                                {item.title.replace(/(<([^>]+)>)/ig, '').substring(0, 15)}
                            </Title>
                            <Title size={6} subtitle spaced={false} className="note-body">
                                {cleanBodyContent}
                            </Title>
                            <Column.Group breakpoint="mobile">
                                <Column size={10}>
                                    <div className="note-date">
                                        <Tag color="gray">
                                            {Moment(item.updatedAt).format('DD/MM')}
                                        </Tag>
                                    </div>
                                </Column>
                                <Column size={2}>
                                    <FontAwesomeIcon icon={faTrash} color="gray"
                                        onClick={() => deleteNote(item)}/>
                                </Column>   
                            </Column.Group>
                        </List.Item>
                    );
                })}
            </List>
        </Fragment>
    );
}

export default ListNotes;