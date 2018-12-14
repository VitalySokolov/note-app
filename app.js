// console.log('Starting Note app.');

// const fs = require('fs');
const argv = require('yargs').argv;

const notes = require('./notes');

// console.log(`Yargs ${JSON.stringify(argv, undefined, 2)}`);
const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note created.`);
    console.log('----------------');
    console.log(`Note = ${JSON.stringify(note)}`);
  } else {
    console.log(`Note with title ${argv.title} already exists`);
  }
} else if (command === 'list') {
  notes.listNotes();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  const isNoteRemoved = notes.removeNote(argv.title);
  const message = isNoteRemoved ? `Note with title "${argv.title}" was removed`
      : `Note not found`;

  console.log(message);
}
