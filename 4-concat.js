const language = process.argv[2];
const compliment = process.argv[3];

function programCompliment(language,compliment){
console.log(`${language} is ${compliment}` );
}

programCompliment(language,compliment);