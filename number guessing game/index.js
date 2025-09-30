
const minnum=1;
const maxnum=100;

const random=Math.floor(Math.random()*(maxnum-minnum+1))+minnum;
console.log(random);

let attempts=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`guess a number between ${minnum} and ${maxnum}`);
    guess=parseInt(guess); //guess=Number(guess)
    if(isNaN(guess)){
        alert(`please enter a number`);
    }
    else if(guess<minnum || guess>maxnum){
        alert(`please enter a number between ${minnum} and ${maxnum}`);
    }
    else{
        attempts++;
        if(guess<random){
           window.alert(`Entered Number is too low!! TRY AGAIN`);
        }
        else if(guess>random){
            window.alert(`Entered Number is too HIGH!! TRY AGAIN`);
        }
        else{
            window.alert(`Correct!! the answer was the ${random} . It took ${attempts} to guess the correct number`);
            running=false;
        }
       
    }
    
}