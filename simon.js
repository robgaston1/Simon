$(document).ready(function () {
    
    
    function generateSequence(addToArray) {
        var num = Math.floor(Math.random() * 4) + 1;
        addToArray.push(num);
        playSequence(addToArray);
    }
    
    function buttonPlay(btnNum) {
        console.log("Playing button!");
    }
    
    function playSequence(sqnceArr) {
        var arrLen = sqnceArr.length;
        
        for (var i = 0; i < arrLen; i++) {
           
            
            setTimeout(buttonPlay(i), 1000);
        }
    }
    
    
});