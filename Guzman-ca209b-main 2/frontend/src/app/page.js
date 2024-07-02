"use client"
import Editor from "@/components/Editor";
import Sidebar from "@/components/Sidebar";
import {useEffect, useState} from "react";


export default function Home() {
    const [notes, setNotes] = useState([])
    const [temporaryNoteText, setTemporaryNoteText] = useState("")
    const [currentNote, setCurrentNote]= useState(notes[0])


    useEffect(() => {
        fetch('http://localhost:8000/', {cache: 'no-store'})
            .then((res) => res.json())
            .then((data) => {
                setNotes(data)
            })
    }, [])

    useEffect(() => {
        if (!currentNote) {
            setCurrentNote(notes[0])
        }
    }, [notes])

    useEffect(() => {
        if (currentNote) {
            setTemporaryNoteText(currentNote.body)
        }
    }, [currentNote])

    useEffect(() => {
        const timeoutId = setTimeout(() => {

            if ( temporaryNoteText !== currentNote?.body) {
                const updatedNote = {...currentNote, body:temporaryNoteText}
                updateNote(updatedNote)
            }
        }, 500)
        return () => clearTimeout(timeoutId)
    }, [temporaryNoteText])

    const updateNote = updatedNote => {
        if (!currentNote){
            return
        }
        fetch(`http://localhost:8000/${updatedNote?.id}`, {
            body: JSON.stringify({
                body: updatedNote.body,
                tag: updatedNote.tag,
                archived: updatedNote.archived
            }),
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
        })
            .then( res => res.json())
            .then(data => {
                setNotes(prevNotes =>  prevNotes.map(note =>
            note.id === data?.id ? data : note))
            })
    }
    const createNewNote= () => {
        const newNote = {
            body: "",
            archived: false,
            tag:"",
        }

        fetch(`http://localhost:8000/`, {
            body: JSON.stringify(newNote),
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
        }).then(res => res.json())
            .then (data => {
                setCurrentNote(data)
                setNotes(prevNotes => [...prevNotes, data])
            })

    }

    const deleteNote = (id) => {
        fetch(`http://localhost:8000/${id}`, {method: 'DELETE'})
            .then( res => res.json())
            .then(data => {
                setNotes(oldNotes => oldNotes.filter(oldNote => oldNote.id !== id))
            })
    }

    return (
        <div className="flex h-screen">
          <div className="w-2/5 xl:w-1/4 lg:w-2/6 border-2">
              <Sidebar
                notes={notes}
                currentNote={currentNote}
                setCurrentNote={setCurrentNote}
                deleteNote={deleteNote}
                updateNote={updateNote}
                createNewNote={createNewNote}
              />
          </div>
          <div className="w-3/5 xl:w-3/4 lg:w-4/6 border-2">
          {notes.length > 0?
              <Editor
                  temporaryNoteText={temporaryNoteText}
                  setTemporaryNote={setTemporaryNoteText}
              />
            :
              <div className="text-center text-2xl p-auto h-screen justify-center flex">
                  <h1 className="self-center"> No hay notas </h1>
              </div>
              }
          </div>
        </div>
  );
}
