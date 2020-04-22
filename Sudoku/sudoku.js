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
    ];

    // sudoku_array[0][0]=1;
    // sudoku_array[0][1]=4;
    // sudoku_array[0][2]=2;
    // sudoku_array[1][0]=1;
    // sudoku_array[1][1]=8;
    // sudoku_array[1][2]=7;


    // console.log(sudoku_array);
    
    let row = 0;
    let col =0 ;
    
    //console.log(sudoku_array[1][1]);
    
    for(let i=0; i<sudoku.length; i++){
        if(sudoku[i]==='undefined'){
            break;
        }
        else if(sudoku[i] === '\n'){  
            sudoku_array.push([]); 
            row = row + 1;
            col = 0;    
        }
        else{
            //console.log(typeof(sudoku[i]));
            sudoku_array[row][col]=sudoku[i];
            col = col + 1;
    
            //console.log(sudoku_array);
        }
    }
    console.log(sudoku_array);
}