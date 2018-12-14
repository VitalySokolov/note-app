const fs = require('fs');
const _ = require('lodash');

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };

  try {
    const noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  } catch (e) {

  }
  // console.log(`Lodash = ${JSON.stringify(_.uniqBy(notes, 'title'))}`);

  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

const readNote = (title) => {
  console.log('Read note', title);
};

const removeNote = (title) => {
  console.log('Remove note', title);
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