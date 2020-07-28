// Global
const container = document.querySelector('.container');

const colorFun = (e) => {
 
  e.target.style.backgroundColor = `tomato`;
 
  return console.log('Hello from color fun')
}


    //////////////////Build a grid boxes////////////////////
    function buildGrid (n) {
        let cellDimensions = (600 / n);
        let gridBox = Math.pow(n, 2); 
            while (gridBox > 0) {
            let div = document.createElement('div');
            container.appendChild(div)
            div.classList.add('part')
            div.style.height = cellDimensions + 'px';  
            div.style.width = cellDimensions + 'px'; 
            div.style.border = '1px solid black';
            div.style.margin = '0';
            gridBox--;
        };

    const  cells = document.querySelectorAll('.part'); 
    cells.forEach(cell => cell.addEventListener('mouseenter', colorFun));

     };
     
     buildGrid(
        16
        )


///////////////////////////////////////////////////////////////
const deleteEvent = document.querySelector('.clear-bt').addEventListener('click',clickToClear); 
function clickToClear (){
    container.querySelectorAll('.part').forEach(n => n.remove());
    const value = prompt("add how many number you want ??! ")
    const numberValue = Number(value)
    if(64 >= numberValue > 0){
      buildGrid(numberValue)
    } else {
      alert('you should enter a valid value between 1 to 64')
    }
}