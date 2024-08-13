const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

const subButton = document.querySelector('.sub-button')
subButton.addEventListener('click', function(e){
    body.style.backgroundColor = e.target.id
})