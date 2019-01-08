const yargs = require('yargs');

const titleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't',
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOption,
    body: {
      describe: 'Note text',
      demand: true,
      alias: 'b',
    },
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOption,
  })
  .command('remove', 'Remove a note', {
    title: titleOption,
  })
  .help()
  .argv;

const notes = require('./notes');

const command = argv._[0];

const logNote = (note) => {
  console.log('----------------');
  console.log(`Note = ${JSON.stringify(note)}`);
};


if (command === 'add') {

  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created.');
    logNote(note);
  } else {
    console.log(`Note with title ${argv.title} already exists`);
  }
} else if (command === 'list') {
  const allNotes = notes.listNotes();
  if (allNotes.length === 0) {
    console.log('Notes not found');
  } else {
    allNotes.forEach(logNote);
  }

} else if (command === 'read') {
  const note = notes.readNote(argv.title);
  if (note) {
    logNote(note);
  } else {
    console.log(`Note with title ${argv.title} not found`);
  }
} else if (command === 'remove') {
  const isNoteRemoved = notes.removeNote(argv.title);
  const message = isNoteRemoved ? `Note with title "${argv.title}" was removed`
    : 'Note not found';

  console.log(message);
}
