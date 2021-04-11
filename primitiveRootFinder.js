/* In this function, you can input a number
   then it will output a number that is the
   primitive roots of the original number.
*/
function primitiveRootFinder(num){
    
    let PRA = [];
    let PRABool = true;
    let primitiveRoots = [];
    for(let i = 1; i < num; i++){
        for(let j = 1; j < num; j++){
            PRA[j-1] = (Math.pow(i,j) % num);
        }
        
        console.log(PRA);
        
        for(let l = 1; l < num-1; l++){
            if(PRA[l-1] === 1){
                PRABool = false;
            }
        }
        
        if(PRABool === true){
            primitiveRoots.push(i);
        }
        
        PRABool = true;
    }
    
    return primitiveRoots
}
