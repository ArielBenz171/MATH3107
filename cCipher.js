// You input a string and number to shift the Caesar
// Cipher and it outputs an encrypted code with
// the shift chosen
function cCipher(string, num){
    let finalString = "";
    let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let shiftArr = [];
    let count = 0;
    let arrCount = 0;
    let shiftArrCount = 0;
    
    string = string.toUpperCase();
    
    for(let i = 0; i < arr.length; i++){
        if((i + num) <= arr.length - 1){
            arrCount = i + num;
        }
        
        else{
            arrCount = count;
            count++;
        }
        
        shiftArr[shiftArrCount] = arr[arrCount];
        shiftArrCount++;
    }
    
    for(let j = 0; j < string.length; j++){
        for(let k = 0; k < arr.length; k++){
            if(string[j] === arr[k])
                finalString += shiftArr[k];
        }
    }
    
    return finalString.replace(/(.{5})/g,"$1 ");
}