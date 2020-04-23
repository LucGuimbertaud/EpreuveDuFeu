var arg = process.argv.slice(2);

var sudoku = getSudokuGrid(arg[0]);

sudoku = resolveSudoku(sudoku);

sudoku.forEach(element => console.log(element));









//Get the data from the grid in a txt file 
function getSudokuGrid(sudoku_path){
    let fs = require('fs');
    let sudoku = fs.readFileSync(sudoku_path, 'utf8');

    sudoku = sudokuInArray(sudoku);
    return sudoku;
}





//Function to put the data from the txt file in an array
function sudokuInArray(sudoku){
    var sudoku_array=[
        [],
    ];
    
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
    return sudoku_array;
    //console.log(sudoku_array);
}



//Function to resolve the sudoku
function resolveSudoku(sudoku){

    //Parcour the rows
    for(let y=0; y<sudoku.length; y++){

        //Parcour the cols
        for(let x=0; x<(sudoku[y].length); x++){

            if(sudoku[y][x] === "_"){
                let new_value = 1;


                while(new_value < 10){

                    if(checkLine(sudoku[y], new_value)===true && checkCol(sudoku, x, new_value)===true){
                        sudoku[y][x]=new_value;
                        break;
                    }



                    new_value++;
                }
            }
            
        }
    }
return sudoku;
}



function checkLine(row, value){
    //console.log(value);
    let result = true;
    for(let i=0; i<row.length; i++){
        //console.log(i);
        if(Number(row[i])===value){
            result = false;
        }
    }
    return result;
}


function checkCol(col, x, value){
    //console.log(value);
    let result = true;
    for(let i=0; i<col.length; i++){
        if(Number(col[i][x])===value){
            result = false;
            break;
        }
    }    
    return result;
}