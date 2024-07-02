export default function TagSelector({updateNote, note}){
    return (
        <select className="form-select form-select-sm w-10 md:w-16 lg:w-20 xl:w-24 flex-none self-center bg-slate-200 rounded text-xs p-1 text-black h-1/2" aria-label=".form-select-sm example"
                onChange={event => updateNote({...note, tag: event.target.value})} defaultValue={`${note.tag}`}>
            <option value="">Tag</option>

            <option value="High Priority" onClick={event => event.stopPropagation()}>High priority</option>
            <option value="Groceries" onClick={event => event.stopPropagation()}>Groceries</option>
            <option value="Other" onClick={event => event.stopPropagation()}>Other</option>
        </select>
    )
}