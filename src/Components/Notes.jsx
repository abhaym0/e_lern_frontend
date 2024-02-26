import React from 'react'

const Notes = () => {
    const [notes, setNotes] = useState('');
    localStorage.setItem('notes', notes);

// When component mounts, to load saved notes
useEffect(() => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

  return (
    <div>
       <div className="notes-section">
        <h2>Notes</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Take your notes here..."
          rows={10}
          cols={50}
        />
      </div>
    </div>
  )
}

export default Notes
