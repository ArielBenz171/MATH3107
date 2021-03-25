// You input a key word, a word that you want to encrypt
// and the amount of rows in the matrix and then you given
// the word encrypted via the hill cipher
function hillCipher(key,word,matrixRowLength){
    let doubleArray = doubleArr(key, matrixRowLength);
    printText(doubleArray);
    printArray(doubleArray);
    word = wordCheck(word,matrixRowLength);
    determinant(doubleArray);
    vectorMultiply(word,doubleArray,matrixRowLength);
}

function wordCheck(a, b){
    while(a.length % b !== 0){
        a += "c";
    }
    console.log(a);
    return a;
}

function doubleArr(word,rows){
    let a = [];
    let b = [];
    word = word.toUpperCase();
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < Math.floor(word.length/rows); j++){
            b[j] = word.charCodeAt(j + (Math.floor(word.length/rows)*i)) - 65;
        }
        a[i] = b;
        b = [];
    }
    
    return a;
}

function determinant(arr){
    let det = 0;
    if(arr.length == 1){
        det = arr[0][0];
    }
    else if(arr.length == 2){
        det = (arr[0][0]*arr[1][1]) - (arr[0][1]*arr[1][0]);
    }
    
    else if(arr.length == 3){
        det = (arr[0][0]*arr[1][1]*arr[2][2]) + (arr[0][1] * arr[1][2] * arr[2][0]) + (arr[0][2] * arr[1][0] * arr[2][1]) - (arr[0][2] * arr[1][1] * arr[2][0]) - (arr[0][0] * arr[1][2] * arr[2][1]) - (arr[0][1] * arr[1][0] * arr[2][2]);
    }
    
    det %= 26;
    
    if(det < 0){
        det = 26 + det;
    }
    
    for(let i = 2; i < det; i++){
        if(det % i === 0){
            alert("Determinant is not a prime");
            break;
        }
    }
    
    console.log("Determinant: " + det);
    console.log("");
}

function vectorMultiply(word, arr, num){
    let vector = [];
    let wordMatrix = [];
    let vectorMatrix = [];
    let arrCount = 0;
    
    word = word.toUpperCase();
    
    for(let i = 0; i < word.length/num; i++){
        for(let j = 0; j < num; j++){
            vector[j] = word.charCodeAt(j + (i*num)) - 65;
        }
        wordMatrix[i] = vector;
        vectorMatrix[i] = multiply(arr, vector);
        vector = [];
    }
    
    printText(wordMatrix);
    printArray(wordMatrix);
    printText(vectorMatrix);
    printArray(vectorMatrix);
}

function multiply(m1, m2){
    let result = [];
    let sum = 0;
    for(let i = 0; i < m1.length; i++){
        for(let j = 0; j < m2.length; j++){
           sum += (m1[i][j] * m2[j]);
        }
        result[i] = sum % 26;
        sum = 0;
    }
    return result;
}

function printArray(a){
    for(let i = 0; i < a.length; i++){
        console.log(a[i]);
    }
    console.log("=============");
    console.log();
}

function printText(a){
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let finalString = "";
    
    for(let i = 0; i < a.length; i++){
        for(let j = 0 ; j < a[i].length; j++){
            finalString += letters[a[i][j]];
        }
    }
    
    console.log(finalString);
}