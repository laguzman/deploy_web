import DeleteIcon from "@/components/icons/DeleteIcon";
import ArchiveIcon from "@/components/icons/ArchiveIcon";
import TagSelector from "@/components/TagSelector";

export default function Note({note, currentNote, setCurrentNote, deleteNote, updateNote}) {

    const notePreview = note.body? note.body.replace(/<[^>]+>/g, ''): "New Note"

    return (
        <div key={note.id} className="active border-t h-50">
            <div role="button" className={` flex col-12 p-4 h-20 ${currentNote?.id === note.id ? "bg-blue-600 bg-gradient-to-bl text-white": "hover:bg-blue-100 "}`}  onClick={(event) => {
                setCurrentNote(note)
                event.stopPropagation()
            }}>
                <h6 className="m-auto truncate flex-1">{notePreview}</h6>
                <TagSelector updateNote={updateNote} note={note}/>
                <ArchiveIcon updateNote={updateNote} note={note} setCurrentNote={setCurrentNote}/>
                <DeleteIcon deleteNote={deleteNote} note={note}/>

            </div>
        </div>
    )
}