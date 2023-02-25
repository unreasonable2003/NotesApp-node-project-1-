const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.find((note) =>
        note.title === title
    )

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New note added!'))
    } else {
        console.log(chalk.red.bold('Note title already taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesTokeep = notes.filter((note) => {
        return note.title !== title
    })

    if (notes.length > notesTokeep.length) {
        console.log(chalk.green.inverse.bold('Note removed!'))
        saveNotes(notesTokeep)
    } else {
        console.log(chalk.red.inverse.bold('No note found!'))
    }

}

const listNotes = () => {
    const notes = loadNotes()

    if (notes.length === 0) {
        console.log(chalk.red.inverse.bold('No notes found to display..'))
    } else {
        console.log(chalk.white.inverse.bold(' Your Notes.. \n'))
        notes.forEach((note) => {
            console.log(note.title)
        })
    }
}

const readNotes = (title) => {
    const notes = loadNotes()

    const findNotes = notes.find((note) => note.title === title)

    if(findNotes){
        console.log(chalk.white.inverse.bold(findNotes.title))
        console.log(findNotes.body)
    }else{
        console.log(chalk.red.inverse.bold('No Note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}