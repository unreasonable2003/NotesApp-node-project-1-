const notes = require('./notes.js')
// const validator = require('validator')
// const chalk = require('chalk')
const yargs = require('yargs')

//create add command
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,//have to provide for the command to work
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//create List command
yargs.command({
    command: 'list',
    describe: 'list your note',
    handler: function(){
        console.log('Listing out all notes..')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note..')
    }
})

yargs.parse()
//yargs parse goes through the process of parsing the arguments 
//with all he config details we provided


//console.log(yargs.argv)


