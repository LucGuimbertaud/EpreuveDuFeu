var args = process.argv.slice(2);

getDataFile('c1.txt');



function getDataFile(filename){

    var fs = require('fs');
    var data = fs.readFileSync(filename, 'utf8');

    data = dataInArray(data);
    console.log(data);
}




function dataInArray(data){

    var count = 0;
    var datas = new Array();
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