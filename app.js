//Safety practice of letting HTML and CSS load first before JS
document.addEventListener("DOMContentLoaded", () => {CreateCells(16)});

//global var for color used in bg-color change of the whiteboard
let color = "black";

//1.Function to make grid cells within the board element
function CreateCells(inputNum)
{
    //style the element into a grid structure
    let whiteBoard = document.querySelector('.whiteboard');
    let cells = whiteBoard.querySelectorAll('.cell');
    cells.forEach(cell => cell.remove());
    whiteBoard.style.gridTemplateColumns = `repeat(${inputNum},1fr)`;
    whiteBoard.style.gridTemplateRows = `repeat(${inputNum},1fr)`;
    //fill up the grid with divs representing cells
    let maxCells = inputNum * inputNum;     
    for (let i = 0; i < maxCells; i++)
    {
        let cell = document.createElement('div');
        cell.setAttribute("class", "cell");
        cell.style.border = "0.5px solid black";
        cell.style.backgroundColor = "white";
        whiteBoard.insertAdjacentElement("beforeend", cell);
        cell.addEventListener("mouseover", ColorDiv)
    }
}

//2. onclick event to trigger new grid according to inputSize

//object assigned to button
let buttonclick = document.querySelector('.update-btn');

//trigger functions when click is performed on the button 
buttonclick.addEventListener("click", () => {
    let size = InputSize();
    if(!isNaN(size)|| size != null)
    {
        CreateCells(size);

    }
    else
    {
        CreateCells(16);
    }
})

//3. DOM reference the remaining buttons of the UI to their respective functions
//RESET button- sets all div cells bg-color back to white 
let buttonReset = document.querySelector('.reset-btn');
buttonReset.addEventListener("click", () => {
    ResetGrid();
});

//function to get value of user input which is used in CreateCell(),determines max cell no.
function InputSize() {
    //1.Instainiate object for input text
    let input = parseInt(document.querySelector('.text-box').value);
    //2. have IF-ELSE to validate input
    if (input === '' ||isNaN(input))
    {
        alert("Please put a number");
        CreateCells(16);
    }
    else if (input <= 0)
    {
        alert("Please put in a number greater than 1");
        CreateCells(16);
    }
    else
    {
        alert("Grid has been updated! Lets draw!");
        return input;
    }
}

//function to reset bg-color of all cells in whiteboard back to white
function ResetGrid(){
    let divList = document.querySelectorAll('.cell');
    divList.forEach(div => div.style.backgroundColor = 'white');
}

//changes bg-color o
function ColorDiv(){
    if (color == 'random')
    {
        this.style.backgroundColor = `hsl(${Math.random() * 360} ,100% , 50% )`;
    }
    else
    {
        this.style.backgroundColor = "black";
    }
}

//changes color var to value according to button triggered (black or random color)
function ColorChoice(selectedColor){
    color = selectedColor;
}
