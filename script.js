const body = document.querySelector('body');
const inputs = document.querySelector('input');
const header = document.querySelector('.container');
const grid = document.createElement('div');
body.appendChild(grid);


const clearWindow = document.createElement('button');
clearWindow.textContent = 'Clear';
header.appendChild(clearWindow);
clearWindow.setAttribute('style', 'background-color: red; font-size: 4vmin; font-family: sans-serif; padding: .5rem; border-radius: 5px')
const colorBtn  = document.createElement('button');
colorBtn.textContent = 'Color';
header.appendChild(colorBtn);
colorBtn.setAttribute('style', 'justify-self: center; background: linear-gradient(to right, #07a7d3, #0183a5); font-size: 4vmin; font-family: sans-serif; padding: .5rem; border-radius: 5px')

const para = document.createElement('p');
para.textContent = 'Enter number within range of 5 - 100';
header.insertBefore(para, clearWindow);
inputs.setAttribute('style', 'justify-self: stretch; min-height: 2rem')

// 
 


window.onload = cellRepeat(16);

function cellRepeat (input) {
    
    grid.setAttribute('style', `display: grid; border: 1px solid black; place-items: center; justify-content: center; grid-template-columns: repeat(${input}, 1fr); grid-template-rows: repeat(${input}, 1fr)`);
    grid.textContent = '';

    for ( let i = 0; i < (input ** 2); i++ ) {
        const cell = document.createElement('div');
        grid.appendChild(cell);
        cell.setAttribute('style', `border: 1px dotted rgba(0,0,0,0.8)`);
        cell.textContent = '';
        cell.setAttribute('class', 'cell');
        const innerCell = document.querySelectorAll('.cell');
        innerCell.forEach (item => {
            item.addEventListener ('mouseover', (e) => {
                e.target.style.backgroundColor = `${switchColors()}`;
            });
        });
       
    }
       
    //return grid;
    
}

const innerCell = document.querySelectorAll('.cell');

console.log(this);
clearWindow.addEventListener('click', () => {
    body.removeChild(grid);
    console.log(body);
});







function switchColors () {
    const a =   Math.floor(Math.random() * 256);
    const b =   Math.floor(Math.random() * 256);
    const c =   Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`;
}





inputs.addEventListener('change', () => {
    const size = inputs.value;
    cellRepeat(size);
});








