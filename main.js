let button = document.querySelectorAll('.button')
let output = document.querySelector('#output')
let result = ''

// for (let item in button) {
//     addEvent(item)
// }
button.forEach( item => addEvent(item) )


function addEvent(btn) {
    btn.addEventListener('click', event)
    function event(){

        let type = btn.getAttribute('data-type')
        if(type === '='){
            result = eval(result)
            output.textContent = result

        } else if(type === 'C'){
            result = ''
        } else {
            result +=type
        }
        console.log(result)
        output.textContent = result
    }
}


