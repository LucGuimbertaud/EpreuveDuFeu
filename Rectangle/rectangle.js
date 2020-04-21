// var args = process.argv.slice(2);





console.log(getDataFile("c2.txt"));




function getDataFile(filename){

     var fs = require('fs');
     fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        // console.log('OK: ' + filename);
        // console.log(data);
        datas = dataInArray(data);
        console.log(datas);
    });
}


function dataInArray(data){

    var count = 0;
    var datas = new Array();
    while(count == 0){
        for(let i = 0; count == 0; i++){
            if(typeof(data[i]) === 'undefined'){
                count = 1;
                // console.log(typeof(data[i]));
                // console.log('fini');
            }
            else{  
                datas[i]=data[i];
                //console.log(datas[i]);
                //console.log('ok');
            }
        }
    }
    return datas;
}
