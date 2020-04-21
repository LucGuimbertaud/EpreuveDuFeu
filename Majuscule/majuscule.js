var argument = process.argv.slice(2);

argument = String(argument).toLowerCase();
var count = 1;

for(var i=0; i<argument.length; i++){
    //console.log(argument[i].indexOf(' '));

    if(argument[i].indexOf(' ') == 0){   
    }
    else if(count%2 == 0){
        console.log(count);
        argument = argument.replace(argument[i] ,argument[i].toUpperCase());
        count = count + 1;  
    }
    else{
        
    }
}


console.log(argument);



