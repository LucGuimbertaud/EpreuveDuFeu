var arg = process.argv.slice(2);


getSudokuGrid(arg[0]);



function getSudokuGrid(sudoku_path){
    let fs = require('fs');
    let sudoku = fs.readFileSync(sudoku_path, 'utf8');

    sudokuInArray(sudoku);
}


function sudokuInArray(sudoku){
    var sudoku_array=[
        [],
        [],
    ];
    
    let row = 0;
    let col =0;
    
    //console.log(sudoku_array[1][1]);
    
    for(let i=0; i<sudoku.length; i++){
        if(sudoku[i]==='undefined'){
            break;
        }
        else if(sudoku[i] === '\n'){   
            row = row + 1
            col = 0;    
        }
        else{
            sudoku_array[col][row] = sudoku_array.push(sudoku[i]);
            col = col + 1;
    
            //console.log(sudoku_array);
        }
    
    
    }
    console.log(sudoku_array);
}