let todoForm = document.querySelector('#todoForm');
let userInput = document.querySelector('#userInput');
let add = document.querySelector('#addButton');
let removeAll = document.querySelector('#resetButton');
let ul = document.querySelector('#ul');
let removeCompleted = document.querySelector('#removeCompleted');
let ulLI = "";
let editOn = document.querySelector('#editMode');


todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (userInput.value !== '') {
        let newLi = document.createElement('li');
        newLi.innerText = userInput.value;
        let editButton = document.createElement('button');
        // let newDiv = document.createElement('div');
        // newDiv.setAttribute('clickableDiv');
        let deleteButton = document.createElement('button');
        deleteButton.innerText = "DELETE"
        editButton.innerText = "Edit"
        newLi.addEventListener('click', function () {
            if (editOn.checked === false) {
                if (newLi.style.textDecoration !== "line-through") {
                    newLi.style.textDecoration = "line-through"
                } else {
                    newLi.style.textDecoration = ""
                }
            }
            if (editOn.checked === true) {
                ul.addEventListener('click', function (event) {
                    let button = event.target;
                    if (userInput.value !== '') {
                        button.innerText = userInput.value;

                    } userInput.value = ''
                }) 
            }

            ulLI = document.querySelectorAll('#ul li');

        })
        ul.appendChild(newLi);
        newLi.appendChild(deleteButton);
        // newDiv.appendChild(deleteButton);
        userInput.value = ''
        
        deleteButton.addEventListener('click', function (){
            newLi.remove()
        })
    }
});

removeAll.addEventListener('click', function () {
    ul.innerHTML = "";
})


removeCompleted.addEventListener('click', function (event) {
    event.preventDefault();
    for (let i = 0; i < ulLI.length; i++) {
        if (ulLI[i].style.textDecoration === "line-through") {
            ulLI[i].remove();
        }
    }
})
