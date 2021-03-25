// Input a base value to the exponent (power), modded to whatever
// value. Then it is encoded via the Fast Powered Algorithm
function FPA(base, power, mod){
    let subscript = 0, count, powerCheck, powerCheckArray, modArray, finalVal;
    do{
        subscript++;
        count = Math.pow(2,subscript)
    }while(count < power)
    
    subscript -= 1;
    powerCheck = power;
    powerCheckArray = [];
    count = 0;
    
    for(let i = subscript; i >= 0; i--){
        if(powerCheck >= Math.pow(2, i)){
            powerCheck -= Math.pow(2, i);
            powerCheckArray[count] = i;
            count++;
        }
    }
    
    modArray = [];
    modArray[0] = base;
    
    for(let i = 1; i <= subscript; i++){
        modArray[i] = (Math.pow(modArray[i-1],2) % mod)
    }
    
    finalVal = modArray[powerCheckArray[0]];
    
    for(let i = 1; i < powerCheckArray.length; i++){
        finalVal = ((finalVal *  modArray[powerCheckArray[i]]) % mod)
    }
    
    finalVal += " (mod " + mod + ")"
    return finalVal;
}