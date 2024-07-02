export default function ActiveArchiveTabs({activeTab, setActiveTab}){
    return (
        <ul className="flex bg-gray-200">
            <li className="mr-1">
                <button
                    className={`inline-block py-2 px-4 font-semibold ${
                        activeTab === 'notes'
                            ? 'bg-white border-l border-t border-r rounded-t text-blue-500'
                            : 'text-blue-500 hover:text-blue-800'
                    }`}
                    onClick={() => setActiveTab('notes')}
                >
                    Notes
                </button>
            </li>
            <li className="mr-1">
                <button
                    className={`inline-block py-2 px-4 font-semibold ${
                        activeTab === 'archived'
                            ? 'bg-white border-l border-t border-r rounded-t text-blue-500'
                            : 'text-blue-500 hover:text-blue-800'
                    }`}
                    onClick={() => setActiveTab('archived')}
                >
                    Archived
                </button>
            </li>
        </ul>
    )

}