var a =parseInt(prompt("Enter frist the number"));
var b =parseInt(prompt("Enter second the number"));
var op=prompt("Enter the operator");

switch(op)
{
     case '+':document.getElementById("result").textContent=(a+b);break;
     case '-':document.getElementById("result").textContent=(a-b);break;
     case '/':document.getElementById("result").textContent=(a/b);break;
     case'*':document.getElementById("result").textContent=(a*b);break;
     case'%':document.getElementById("result").textContent=(a%b);break;
 }