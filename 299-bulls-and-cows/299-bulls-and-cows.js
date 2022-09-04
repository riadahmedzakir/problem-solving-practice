/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let secretList = secret.split("");
    let guessList = guess.split("");
    
    let bull = 0;
    let cow = 0;
    let i = 0;
    let j = 0;
    
    while(i<secret.length){
        if(secret[i] == guess[i]){            
            bull++;
            secretList.splice(j, 1);
            guessList.splice(j,1);
        }else {
            j++;
        }        
        i++;
    }
    
    let count = {};
    for(let x=0; x< secretList.length; x++){
        if(count[secretList[x]]){ count[secretList[x]]++; }
        else { count[secretList[x]] = 1; }
    }
    
    for(let y=0; y<guessList.length; y++){        
        if(count[guessList[y]] && count[guessList[y]] > 0){
            cow++;
            count[guessList[y]]--;
        }
    }
    
    return `${bull}A${cow}B`;
};