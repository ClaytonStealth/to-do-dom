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
        // let deleteButton = document.createElement('button');
        // deleteButton.innerText = "DELETE"
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
        // newLi.appendChild(newDiv);
        // newDiv.appendChild(deleteButton);
        userInput.value = ''


    }
    // for (let i = 0; i < liLineThrough.length; i++) {
    //     // console.log(liLineThrough);
    //     liLineThrough[i].addEventListener('click', function () {
    //         console.log(liLineThrough[i].style.textDecoration)
    //         // liLineThrough[i].style.textDecoration = "line-through"
    //         if (liLineThrough[i].style.textDecoration !== "line-through") {
    //             liLineThrough[i].style.textDecoration = "line-through"
    //         } else {
    //             liLineThrough[i].style.textDecoration = ""
    //         }
    //     })

    // }
});
// for (let i = 0; i < ulLI.length; i++) {
//     ulLI.addEventListener('dblclick', function () {
//         ulLI.innerText = userInput.value;
//     })
// }

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

// if (editOn.checked === true) {
//     ul.addEventListener('click', function (event) {
//         let button = event.target;
//         if (userInput !== '') {
//             button.innerText = userInput.value;
//         }
//     })
// }
