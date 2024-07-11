import React, { Fragment } from "react";
import { Button, Column, Tag, Title, List } from "rbx";
import Moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListNotes({ notes, selectNote, current_note }) {
    return (
        <Fragment>
            <Column.Group breakpoint="mobile">
                <Column size={6} offset={1}>
                    <Title size={6}>
                        {notes.length} Notes
                    </Title>
                </Column>
            </Column.Group>
            <List className="notes-list">
                {notes.map((item, key) =>
                    <List.Item 
                        key={key}
                        className={`list-item ${current_note._id === item._id ? 'is-active' : ''}`} // version before active={current_note._id === item._id} 
                        onClick={() => selectNote(item._id)}>
                        <Title size={6} className="note-title">
                            {item.title.replace(/(<([^>]+)>)/ig, '').substring(0, 15)}
                        </Title>
                        <Title size={6} subtitle spaced={false} className="note-body">
                            {item.body.replace(/(<([^>]+)>)/ig, '').substring(0, 30)}
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
                                <FontAwesomeIcon icon={faTrash} color="gray"/>
                            </Column>   
                        </Column.Group>
                    </List.Item>
                )}
            </List>
        </Fragment>
    );
}

export default ListNotes;