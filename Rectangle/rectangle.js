var args = process.argv.slice(2);

var data = new Array();

for(let i=0; i<2; i++){
    data[i] = getDataFile(args[i]);
}

console.log(data);


function getDataFile(filename){
    let fs = require('fs');
    let data = fs.readFileSync(filename, 'utf8');

    data = dataInArray(data);
    return data;
}




function dataInArray(data){

    let count = 0;
    let datas = new Array();
    while(count == 0){
        for(let i = 0; count == 0; i++){
            if(typeof(data[i]) === 'undefined'){
                count = 1;
            }
            else{  
                datas[i]=data[i];
            }
        }
    }
    datas = removeItemAll(datas, '\n');
    return datas;
}



function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if(arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}