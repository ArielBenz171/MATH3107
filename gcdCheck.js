
/* Write some code to answer the following question:  
Given an integer n, what is the probability that two numbers a, b chosen randomly from 1 to n (inclusive) satisfy gcd(a,b) = 1?  
Determine, to six decimal places, this probability for n= 10, 100, 1000, and 10000 (your computer will probably have to think for 
awhile on the lastone).  Guess the trend asngoes to infinity. */

function Q2(n){
    let gcf = 0;
    let check = 0, ttlCheck = 0;
    for(let i = 0; i < n + 1; i++){
        for(let j = i + 1; j < n + 1; j++){
            ttlCheck++;

            gcf = gcd(i,j);
            
            if(gcf === 1)
                check++;
        }
    }
    console.log(check, ttlCheck);
    let prob = check / ttlCheck;
    
    return prob.toFixed(6);
}