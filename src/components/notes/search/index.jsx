import React, { Fragment, useState } from "react";
import { Input, Column } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Search({ searchNote, fetchNotes }) {
    const [query, setQuery] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchNote(query);
        }
    };

    return (
        <Column.Group className="is-vcentered" breakpoint="mobile">
            <Column size={9} offset={1}>
                <Input
                    name={query}
                    value={query}
                    placeholder="Search note..."
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </Column>
            <Column mobile={2} size={1}>
                <a href="#" onClick={() => fetchNotes()
                    .then(() => setQuery(""))
                }>
                    <FontAwesomeIcon 
                        icon={faTimes}
                        color="gray"
                        className="is-pulled-left"
                    />
                </a>
            </Column>
        </Column.Group>
    );
}

export default Search;
