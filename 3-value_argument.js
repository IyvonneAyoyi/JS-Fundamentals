const institution = process.argv[2];

if(institution === undefined) {
    console.log("No argument");
} else {
    console.log(institution);
}
