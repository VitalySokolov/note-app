console.log('Starting Note app.');

// const fs = require('fs');
const argv = require('yargs').argv;

const notes = require('./notes');

console.log(`Yargs ${JSON.stringify(argv, undefined, 2)}`);
const command = argv._[0];

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
  // console.log('Add note');
} else if (command === 'list') {
  notes.listNotes();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
}
