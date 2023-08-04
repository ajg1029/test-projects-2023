console.log('Hello World!')
let id1 = document.querySelector('#id1')
console.log(id1)

document.getElementById('my_button').addEventListener('click', () => {
    console.log('button clicked')
    document.getElementById('my_text_field').focus()
})