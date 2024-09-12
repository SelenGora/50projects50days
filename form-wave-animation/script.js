/* 
1- grab labels
2- split labels' innerText with foreach array and split function
3- manipulate with map function and make transition with ``
4- merge splitted letters again with join fnc

*/



const labels = document.querySelectorAll('.form-container label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join('')
})