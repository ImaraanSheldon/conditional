let num1 = 5;
let num2 = 5;

if(num1 == num2){
    console.log("your mother");
}else{
    console.log("your father");
}

let salary = 5000;
let bonus = 500;
let hasworked = salary / 10 == bonus;

if(salary > 5000){
    console.log("You are applicable for a bonus. Your salary incl. bonus is R"+ salary + bonus)
}else{
    console.log("you are not applicable for bonus.  Your salary excl. bonus is R"+ salary)
}

bonus = salary > 5000 ? salary * 0.1 : 0;
console.log("Your salary " + (bonus > 0 ? "incl." : "excl.") + " bonus is R" + (salary + bonus));

salary > 5000 
    ? console.log("You are applicable for a bonus. Your salary incl. bonus is R"+ salary + bonus)
    : console.log("you are not applicable for bonus.  Your salary excl. bonus is R"+ salary)

    if(salary > 5000){
        console.log("You are applicable for a bonus. Your salary incl. bonus is R"+ salary + bonus)
    }else if( hasworked){
        console.log("You are applicable for a bonus. Your salary incl. bonus is R"+ salary + bonus + " because of effort applied")
    }else{
        console.log("you are not applicable for bonus.  Your salary excl. bonus is R"+ salary)
    }

    
    function calcWage(){
    const hours = 45;
    let wage = 50 * hours;
    let extra = (wage / 0.1) + wage;
    let hoursWorked = +document.querySelector('[num]').value;
    let isHoursExceeded = hours <= hoursWorked; 

    let output = document.querySelector('[output]')
    if(isHoursExceeded){
        output.textContent = wage + extra; 
    }else if(hours == hoursWorked){
        output.textContent = wage;
    }
    else{
        output.textContent = wage + 'You Got Underpaid'
    }

}

let Imaraan = 69;

switch(true){
    case  100:
    console.log("you Got an A")
    break;

    case Imaraan <100 && Imaraan >89:
        console.log("You got a B")
        break;

    case Imaraan < 90 && Imaraan >79:
        console.log("You got a C")
        break;

    case Imaraan <80 && Imaraan >69:
        console.log("You got a D")
        break;

    case Imaraan <70 && Imaraan >59:
        console.log("You got a E")
        break;

    case Imaraan <60 && Imaraan >49:
        console.log("You got a Pass Grade")
        break;
        
    default:
        console.log("You got a Fail")
        break;
}

//loop code

for(let i = 0; i <= 10; i++){
    console.log(i);
}

let numbers = [5, 6, 10, 1, 2, 14]

for(let n = 0; n <= numbers.length ; n++){
    console.log(numbers[n]);
}

//even numbers only eg
for(let n = 0; n <= numbers.length ; n++){
    if(numbers[n] % 2 == 0){
        console.log(numbers[n]);
    }
}


let cnt = 0;

while (cnt < numbers.length){
    console.log(numbers | cnt);
    cnt++;
}