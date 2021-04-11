/* In this function, you can input whatever string you want and then
   it will output a string spaced by 5 letters encrypted by a simple
   substitution.
*/
function simpleSub(string){
    let finalString = "";
    let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let randArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.replace(/\s/g, '');
    string = string.toUpperCase();
    
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = randArr[i];
        randArr[i] = randArr[j];
        randArr[j] = temp;
    }
    
    for(let k = 0; k < string.length; k++){
        for(let l = 0; l < arr.length; l++){
            if(string[k] === arr[l])
                finalString += randArr[l];
        }
    }
    
    return finalString.replace(/(.{5})/g,"$1 ") + " " + randArr;
}
