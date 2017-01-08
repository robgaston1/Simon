$(document).ready(function () {
    var sqnceArr = [];
    var count = 0;
    
    $('.red').css('border-color', '#f5545d');
    $('.blue').css('border-color', '#79b8fb');
    $('.yellow').css('border-color', '#ffd82e');
    
    
    function generateSequence() {
        var num = Math.floor(Math.random() * 4) + 1;
        sqnceArr.push(num);
        playSequence();
        count++;
    }
    
    function playGreen(){
        $('#sound').get(0).play();
        $('.green').css('border-color','#6BF9A2');
        
        setTimeout(function(){$('.green').css('border-color','#00A74A');} , 1000);
    }
    
    function buttonPlay(btnNum) {
        //need to iterate through sqnceArr [1,4,2,3,4,1]
        //playGreen; playBlue; playRed; playGreen; playGreen; playRed;
        //for (var i = 0; i< sqnceArr.length; i++)
        //the number in the array will help direct which button should play
        //the button should change color and play the tone for one second
    }
    
    function playSequence() {
        var arrLen = sqnceArr.length;
        for (var i = 0; i < arrLen; i++) {
            setTimeout(buttonPlay(i), 1000);
        }
    }
   playGreen(); 
    
});