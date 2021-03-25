// Checks the gcd of 2 values, either get the final answer
// or get it in equation form
function gcdEquation(a,b){
    let gcdVal;
    let r;
    
    if(b > a){
        gcdVal = a;
        a = b;
        b = gcdVal;
    }
    
    while(r !== 0){
        gcdVal = Math.floor(a/b);
        r = a % b;
        console.log(a + " = " + b+"("+gcdVal+") + "+r);
        if(r !== 0){
            a = b;
            b = r;
        }
    }
    
    return b;
}

function gcd(x, y){
    while(y) {
        let t = y;
        y = x % y;
        x = t;
  }
  return x;
}