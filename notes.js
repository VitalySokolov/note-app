const fs = require('fs');

const DATA_FILENAME = 'notes-data.json';
const fetchNotes = () => {
  try {
    const noteString = fs.readFileSync(DATA_FILENAME);
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync(DATA_FILENAME, JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const readNote = (title) => {
  console.log('Read note', title);
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const newNotes = notes.filter((note) => note.title !== title);

  if (notes.length !== newNotes.length) {
    saveNotes(newNotes);
    return true;
  }
};

const listNotes = () => {
  console.log('List notes');
};

module.exports = {
  addNote,
  readNote,
  removeNote,
  listNotes,
};