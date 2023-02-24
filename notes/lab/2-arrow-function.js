// const square = function(x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew','Jen','Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        // this.guestList.forEach(function(guest) {
        //     console.log(guest + ' is attending ' + this.name)
        // })

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
        //this of => function is binded to parent function context
    }
}

event.printGuestList()