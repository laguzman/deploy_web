'use client'
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
});

export default function Editor({temporaryNoteText, setTemporaryNote}) {

  const modules = {
    toolbar: [
     [{ header: [1, 2, 3, 4, 5, 6, false] }],
     ["bold", "italic", "underline", "strike", "blockquote"],
     [{ align: ["right", "center", "justify"] }],
     [{ list: "ordered" }, { list: "bullet" }],
     ["link", "image"],
    ],
   };

  return (
    <ReactQuill
        className='w-100 '
        modules={modules}
        value={temporaryNoteText}
        onChange={setTemporaryNote}
        placeholder="Enter the Note..."
      />
  )
}