var animations = ['EXERCISE', 'JUGGLER', 'BIKE', 'DIVE'];
var timer;
var speed = 250;
var startAnim = function () 
{
    var textarea = document.getElementsByName('viewer')[0]; 

    var i = 0;
    timer = setInterval(function name() {
        i = (i +1 )%4;
        textarea.value = animations[i];
    }, speed);
    document.getElementById('stopBtn').disabled = false;
}

var stopAnim = function () 
{
    clearInterval(timer);
    document.getElementById('stopBtn').disabled = true;
}

var changeFont = function (value) {
    if (value == 'Tiny')
        document.getElementsByName('viewer')[0].style.fontSize = "7pt";
    else if (value == 'Small')
    document.getElementsByName('viewer')[0].style.fontSize = "10pt";
    else if (value == 'Medium')
    document.getElementsByName('viewer')[0].style.fontSize = "12pt";
    else
        document.getElementsByName('viewer')[0].style.fontSize = "16pt";
}

var changeSpeed = function () {
    if(document.getElementsByName('turbo')[0].checked)
        speed = 50;            
    else
        speed = 250;

    clearInterval(timer);
    var textarea = document.getElementsByName('viewer')[0]; 
    var i = 0;
    timer = setInterval(function name() {
        i = (i +1 )%4;
        textarea.value = animations[i];
    }, speed);
}