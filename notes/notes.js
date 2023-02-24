const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return 'Your Notes....'
}

const addNote = function (title,body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body : body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New note added!'))
    }else {
        console.log(chalk.red.bold('Note title already taken!'))
    }
}

const removeNote = function(title) {
    const notes = loadNotes()

    const notesTokeep = notes.filter(function(note){
        return note.title !== title
    })

    if(notes.length > notesTokeep.length){
        console.log(chalk.green.inverse.bold('Note removed!'))
        saveNotes(notesTokeep)
    }else{
        console.log(chalk.red.inverse.bold('No note found!'))
    }
   
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes  = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}