const argument1 = process.argv[2];
const argument2 = process.argv[3];

if(argument1 === undefined){
    console.log("No argument");
}else if(argument2 === undefined){
    console.log("Argument found");
}else{
    console.log("Arguments found");
}