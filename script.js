
function add(){
    var a=parseInt(document.getElementById('num1').value)
    var b=parseInt(document.getElementById('num2').value)
    var c=a+b;
    var ans=document.getElementById('result')
    ans.innerHTML=c;
   
}
function sub(){
    var a=parseInt(document.getElementById('num1').value)
    var b=parseInt(document.getElementById('num2').value)
    var c=a-b;
    var ans=document.getElementById('result')
    ans.innerHTML=c;

}
function mul(){
    var a=parseInt(document.getElementById('num1').value)
    var b=parseInt(document.getElementById('num2').value)
    var c=a*b;
    var ans=document.getElementById('result')
    ans.innerHTML=c;

}
function div(){
    var a=parseInt(document.getElementById('num1').value)
    var b=parseInt(document.getElementById('num2').value)
    var c=a/b;
    var ans=document.getElementById('result')
    ans.innerHTML=c;

}

