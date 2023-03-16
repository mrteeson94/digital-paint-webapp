//Safety practice of letting HTML and CSS load first before JS
document.addEventListener("DOMContentLoaded", () => {CreateCells(16)});

//1.Function to make grid cells within the board element
function CreateCells(inputNum)
{
    //style the element into a grid structure
    let whiteBoard = document.querySelector('.whiteboard');
    whiteBoard.style.gridTemplateColumns = `repeat(${inputNum},1fr)`;
    whiteBoard.style.gridTemplateRows = `repeat(${inputNum},1fr)`;
    //fill up the grid with divs representing cells
    let maxCells = inputNum * inputNum;     
    for (let i = 0; i < maxCells; i++)
    {
        let cell = document.createElement('div');
        cell.style.border = "0.5px solid black";
        cell.style.backgroundColor = "white";
        whiteBoard.insertAdjacentElement("beforeend", cell);
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })
    }
}

//2. onclick event to trigger new grid according to inputSize
//object assigned to button
let buttonclick = document.querySelector('.update-btn');
//trigger functions when click is performed on the button 
buttonclick.addEventListener("click", () => {
    let size = InputSize();
    CreateCells(size);
})



//function to get inputSize 
function InputSize() {
    //1.Instainiate object for input text
    let input = parseInt(document.querySelector('.text-box').value);
    //2. have IF-ELSE to validate input
    if (input === '' ||isNaN(input))
    {
        alert("Please put a number");
    }
    else if (input <= 0)
    {
        alert("Please put in a number greater than 1");
    }
    else
    {
        alert("Grid has been updated! Lets draw!");
        return input;
    }
}



//Creating a box that houses the grid
// const box = document.createElement('div');
// box.className = 'whiteboard';
// document.body.appendChild(box);
