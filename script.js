let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler)

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value,SCORE.value)

    }
    console.log(SCORE.value)
}

let userListDom = document.querySelector('#userList')

const addItem = (userName,score) =>{
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>

    `
    liDOM.classList.add('list-group-item', 'd-flex' ,'justify-content-between', 'align-items-center'
    )

    userListDom.append(liDOM)
}
