const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 
'Παρασκεύη','Σάββατο']
const MonthsGr = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου' ,
'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου' , 
'Σεπτεμβρίου', 'Οκτωμβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

$(document).ready(function() {

    setInterval(printDate,1000)

    $('.btn').on('click',function () {
        insertNote($('#noteText').val().trim())
        reset()
    })

    // $('.btn, #noteText').on('click keyup', function(e) {
    //     if (e.key === 'click') {
    //         insertNote($('#noteText').val().trim())
    //         reset()
    //     } else if (e.key === 'keyup' && e.key === 'Enter')
    //     e.preventDefault
    //         insertNote($('#noteText').val().trim())
    //         reset()
    // })

    $('#noteText').on('keyup',function (e) {
            if (e.key === 'Enter') {
            e.preventDefault
            insertNote(this.value.trim())
            reset()
            }
         })

})

function printDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()


    let formatedDay = daysGR[day]
    let formatedMonth = MonthsGr[month]

    let formatedDate = `${formatedDay}, ${date} ${formatedMonth} ${year}`
    let formatedTime = `${(hours < 10) ? '0' : ''}${hours}
                        :${(minutes < 10) ? '0' : ''}${minutes}
                        :${(seconds < 10) ? '0' : ''}${seconds}`
                        
    $('.header').html(formatedDate + "<br>"+formatedTime)

}

function insertNote(note) {
 
    if (!note) {
        return

    }
    
    let newNote = $('.hidden.row').clone().removeClass('hidden')

    newNote.find('input').on('click', function() {
        strikeThrough(newNote.find('label'))
    })

    newNote.find('button').on('click', function() {
        deleteNote($(this).parent())
    })

    newNote.find('label').html(note)
    $('.main').append(newNote)
    
}

function strikeThrough(lbl) {
    $(lbl).toggleClass('line-through')
}

function deleteNote(note) {
    $(note).remove()
}

function reset() {
    $('#noteText').val('')
}