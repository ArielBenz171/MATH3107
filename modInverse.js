function modInverse(a, mod){
    let inverse = [];
    for(let i = 0; i < mod; i++){
        if(((a * i) % mod) === 1){
            inverse.push(i);
        }
    }
    return inverse;
}
