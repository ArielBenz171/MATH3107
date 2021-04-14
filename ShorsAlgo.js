/*  This algorithm allows you to input two variables, N which is an odd integer that isn't a prime and a, a number between 1 and N. After going
    through some test cases including, checking the gcd of a and N, it will find the factors of N.

*/
function ShorsAlgo(){
    let n = parseInt(prompt("Pick a odd integer that isn't a prime power"));
    let a = parseInt(prompt("Pick an integer between 1 and N"));
    let fact = [];
    if(isPrime(n) || n % 2 == 0)
      return ("N is either prime or even");
    if(a <= 1 || a >= n)
      return ("a is either less than 1 or greater than or equal to n");
    if(gcd(a,n) > 1)
      return ("gcd is not equal to 1, pick another a");
    let r = quantum(a,n);
    if(r % 2 == 1)
      return ("r is odd, pick another a");
    r /= 2;
    let x = Math.pow(a,r) % n;
    if(x == (n - 1)){
      return ("a^r/2 is equal to -1 (mod N) and will not work within this algorithm, pick another a");
    }
    fact[0] = gcd(x-1,n);
    fact[1] = gcd(x+1,n);
    return fact; 
  }
  
  function gcd(a,n){
    while(n){
      let t = n;
      n = a % n;
      a = t;
    }
    return a;
  }
  
  function quantum(a,n){
    for(let i = 1; i < n; i++){
      if(Math.pow(a,i) % n == 1){
        return i;
      }
    }
    console.log("No value fits for r within 1 to N");
    return null;
  }
  
  function isPrime(num){
    for(let i = 2; i < num; i++){
      if(num % i == 0)
        return false;
    }
    return true;
  }