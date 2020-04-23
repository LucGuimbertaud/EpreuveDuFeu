var args = process.argv.slice(2);
var number = Number(args);

var result = 1;
for(let i = 1; i<number; i++){
    result = result+(result*i);
}

console.log(result.toLocaleString('fullwide', {useGrouping:false}));