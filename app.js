let num = 4;
for(let i = 2; i < 9; i++){
    num *= i;
    // 8/24/96/480/2880/20160/161280
}
console.log(num);

let score = 8;
for(let i = 8; i < 14; i++){
    score += i;
    // 16/25/35/46/58/71
}
console.log(score);

// Print all odd numbers from 0 to 100

for(let i = 0; i <= 100; i++){
    if(i%2 != 0){
    console.log(i);
}
}


for(let i = 1; i <= 10; i++){
    let star = "";
    for(let j = 1; j <= i; j++){
        star = star + "*";

    }
    console.log(star);
}


let city = prompt("Enter your city");
let citiesName = ["karachi","peshawar","lahore","multan"];
let found = false;
for (let i = 0; i < citiesName.length; i++){
    if(city.toLowerCase() === citiesName[i].toLowerCase()){
        console.log(city, " city found");
        found = true;
        break;
    }


}

if(!found){
    console.log(city, " city is not found");
}