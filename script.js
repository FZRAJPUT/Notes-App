const notesContainer = document.querySelector('.notes-container');
const createBTN = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function shownotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBTN.addEventListener('click',function(){
    let inputBox = document.createElement('p');
    let icon = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    icon.src = "./images/delete-213.png";
    notesContainer.appendChild(inputBox).appendChild(icon);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})