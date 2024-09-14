console.log("JS is attached")

// let inputText = document.getElementById('input').value;
// console.log(inputText)

function add(){
    let theLi = document.createElement('li');
    let myButton = document.createElement('button');
    
    myButton.innerText = "Delete";
    myButton.style.margin = '2px';
    
    let inputText = document.getElementById('input').value;
    console.log(inputText);
    
    theLi.innerText = inputText;
    theLi.appendChild(myButton)

   myButton.addEventListener('click', () => {
    let parent = document.getElementById('displayTodo');
    parent.removeChild(theLi);
   })
    let parent = document.getElementById('displayTodo');
    parent.appendChild(theLi)
}