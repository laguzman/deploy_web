'use client'

import Note from "@/components/Note";
import {useEffect, useState} from "react";
import Filters from "@/components/Filters";
import ActiveArchiveTabs from "@/components/ActiveArchiveTabs";

export default function Sidebar({notes, currentNote, setCurrentNote, deleteNote, updateNote, createNewNote}) {
    const [activeTab, setActiveTab] = useState('notes');
    const [sortedNotes, setSortedNotes] = useState([]);
    const [filter, setFilter] = useState("")

    useEffect(() => {
        const sorted = [...notes].sort((a, b) =>
            new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setSortedNotes(sorted);
    }, [notes]);

    const archivedNotes = sortedNotes.filter(note => {
        if (filter === ""){
            return note?.archived
        }
        return note?.archived && filter===note.tag} ).map(note => {
        return <Note
            key={note.id}
            note={note}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            deleteNote={deleteNote}
            updateNote={updateNote}
        />
    })

    const activeNotes = sortedNotes.filter(note => {
        if (filter === ""){
            return !note.archived
        }
        return !note.archived && filter===note.tag}).map(note => {
        return <Note
            key={note.id}
            note={note}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            deleteNote={deleteNote}
            updateNote={updateNote}
        />
    })

    return (
        <div className="w-full h-full p-0">
            <div className="flex justify-between px-5 bg-gray-200 h-[15vh]">
                <h2 className="self-center text-2xl">Notes</h2>
                <button
                    type="button"
                    onClick={() => createNewNote()}
                    className="self-center bg-blue-500 hover:bg-blue-600 text-white font-bold sm:py-2 sm:px-4 md:text-md text-sm py-1 px-2 rounded max-w-xs"
                >
                    Add new note +
                </button>
            </div>

            <ActiveArchiveTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

            <div className="overflow-auto h-[80vh]">
                {activeTab === 'notes' && (
                    <div className="p-0 m-0">
                        {notes.length > 0?
                            <Filters
                                filter={filter}
                                setFilter={setFilter}
                            /> : <></>
                        }
                        {activeNotes}
                    </div>
                )}
                {activeTab === 'archived' && (
                    <div className="p-0 m-0">
                        {notes.length > 0?
                            <Filters
                                filter={filter}
                                setFilter={setFilter}
                            /> : <></>
                        }
                        {archivedNotes}
                    </div>
                )}
            </div>
        </div>

    )
}