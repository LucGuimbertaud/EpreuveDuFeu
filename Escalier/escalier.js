var size = process.argv.slice(2);

for(i=1; i<=size; i++){
    for(y=size; y>i; y--){
        process.stdout.write(' ');
    }
    
    for(x=0; x<i; x++){
        process.stdout.write('#');
    }
    console.log();
}
