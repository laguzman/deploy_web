export default function ArchiveIcon({updateNote, note}) {
    return (
        <div className="transition-transform duration-200 ease-in-out hover:scale-125 self-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 onClick={(event) => {
                     event.stopPropagation()
                     updateNote({...note, archived: !note.archived})}}
                 width="16" height="16" fill="currentColor"
                 className="bi bi-archive-fill m-auto ms-2 w-7 flex-none " viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
            </svg>
        </div>

    )
}