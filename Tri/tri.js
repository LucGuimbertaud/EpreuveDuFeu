var args = process.argv.slice(2);

var sort_number = new Array();
for(let i = 0; i<args.length; i++){
    sort_number[i] = Number(args[i]);
}

sort_number = sort_number.sort();
sort_number = sort_number.reverse();

console.log(sort_number);
