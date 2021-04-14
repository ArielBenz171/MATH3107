/* This algorithm allows you to give three variables, two primes p & q and an exponent e, after going through several checks including,
   checking the gcd of the exponent and p-1 * q-1. Once, it passes all of the cases, you can enter a message m, that is either a random number
   or a message encoded into a number. Afterwards, it is encrypted to variable c. As well, you can also decrypt the exponent if wanted.
*/

function RSASet(){
    let p = parseInt(prompt("Pick a prime p"));
    let q = parseInt(prompt("Pick a prime q, larger than p"));
    let e = parseInt(prompt("Pick a exponent e"));
    let pqSubOne = ((p-1)*(q-1));

    if(p > q){
      return ("p is greater than q");
    }
    
    if(gcd(e,pqSubOne) !== 1){
      return ("The gcd of the exponent and p-1 times q-1 is not equal to 1");
    }
  
    let n = p*q;
    let m = parseInt(prompt("Pick a number between 1 to p*q"));
    let setPublic = "(N, e) = (" + n + ", " + e + ")";
    console.log(setPublic);
    
    if(m > n){
      return ("The message m is greater than p*q")
    }
    
    let c = RSAEncrypt(n,e,m);
  
    return RSADecrypt(n,e,pqSubOne,c)
  }
  
  function RSAEncrypt(n,e,m){
    let c = (Math.pow(m,e) % n);
    let cM = "c = " + c;
    console.log(cM);
    return c;
  }
  
  function RSADecrypt(n,e,pqSubOne,c){
    let d = 0;
    for(let i = 1; i < pqSubOne; i++){
      if(i*e % pqSubOne == 1){
        d = i;
      }
    }
    console.log("d = " + d);
    let m = (Math.pow(c,d) % n);
    let mM = "m = " + m;
    console.log(mM);
    return m;
  }
  
  function gcd(a,n){
    while(n){
      let t = n;
      n = a % n;
      a = t;
    }
    return a;
  }