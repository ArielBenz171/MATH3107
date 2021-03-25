// A bunch of codes to solve different modulo questions

// x + 42 ≡ 23 (mod 51)

function q1(w){
    let finArr = [];
    for(let i = 0; i < 51; i++){
        if(((i + 42) % 51) === 23){
            finArr.push(i);
        }
    }
    
    return finArr;
}

//x^2 ≡ 1 (mod 17)

function q2(){
    let finArr = [];
    for(let i = 0; i < 17; i++){
        if((Math.pow(i,2) % 17) === 1){
            finArr.push(i);
        }
    }
    
    return finArr;
}

// x^3 − x^2 + 2x − 2 ≡ 0 (mod 11)

function q3(){
    let finArr = [];
    for(let i = 0; i < 11; i++){
        console.log((Math.pow(i,3) + Math.pow(i,2) + (2 * i) - 2) % 11);
        if(((Math.pow(i,3) - Math.pow(i,2) + (2 * i) - 2) % 11) === 0){
            finArr.push(i);
        }
    }
    return finArr;
}

