//if inside if
let age = 80;
if (age >= 18) {
    console.log("You are an adult.");
    if (age >= 65) {
        console.log("You are a senior citizen.");
    }
}
else if (age >= 13) {
    console.log("You are a teenager.");
}
else {
    console.log("You are not a teenager.");
}

