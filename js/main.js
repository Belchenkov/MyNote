// main.js
function getNote(){
    if(localStorage.getItem('note')){
        var note = localStorage.getItem('note');
    } else {
        var note = 'Go ahead and edit this note to save in local storage';
    }

    document.getElementById('note').innerHTML= note;
}

function saveNote(id) {
    var note = document.querySelector('#note').innerHTML;
    localStorage.setItem('note', note);
}

document.querySelector('.clear').addEventListener('click', () => {
    clear: localStorage.clear();
    return false;
});

getNote();