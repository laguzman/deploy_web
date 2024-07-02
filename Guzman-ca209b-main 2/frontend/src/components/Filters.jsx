
export default function Filters({filter, setFilter}) {

    const handleFilterChange = (noteFilter) => {
        setFilter(noteFilter)
    }

    return (
        <div className="md:py-3 md:px-2 flex md:gap-4 gap-2 m-0 md:text-sm text-xs py-1 px-1 sticky top-0 bg-white">
            <button
                onClick={() => (handleFilterChange("High Priority"))}
                className={
                    `rounded-lg bg-slate-200  px-3 py-2
                    ${filter==="High Priority"? "border border-blue-600":""}
                       `
                }
            >High Priority</button>
            <button
                onClick={() => handleFilterChange("Groceries")}
                className={
                    `rounded-lg bg-slate-200  px-3 py-2
                    ${filter==="Groceries"? "border border-blue-600":""}`
                }
            >Groceries</button>
            <button
                onClick={() => handleFilterChange("Other")}
                className={
                    `rounded-lg bg-slate-200  px-3 py-2
                    ${filter==="Other"? "border border-blue-600":""}
                       `
                }
            >Other</button>

            {filter ? (
                <div  className="inline-block my-auto cursor-pointer" >
                    <svg onClick={() => handleFilterChange("")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            ) : null}

        </div>
    )
}