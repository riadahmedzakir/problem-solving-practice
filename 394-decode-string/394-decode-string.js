/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    
    for(let i=0; i<s.length; i++){
        if(s[i] !== "]"){
            stack.push(s[i]);
        } else { 
            let substring = "";
            while(stack[stack.length - 1] != "["){
                substring = stack.pop() + substring;
            }
            stack.pop();
            let rep = "";
            while(stack  && stack[stack.length-1] && isNumber(stack[stack.length-1])){
                rep = stack.pop() + rep;
            }
            
            console.log(rep);
            
            rep = parseInt(rep);
            
            for(let i=0; i<rep; i++){
                stack.push(substring);
            }
        }
    }
    
    return stack.join("");
};
    
    
var isNumber = function(str){
    return str.charCodeAt(0) > 47 && str.charCodeAt(0)  < 58;
}