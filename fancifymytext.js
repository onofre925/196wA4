
function alertPrompt()
{
   alert("Hello, World!");
}
function bigger() 
{
    var text = document.getElementById("feedme");
    text.style.fontSize = "24pt";
    
   
 }
function bolds() 
{
    var text = document.getElementById("feedme");
    text.style.fontWeight = "bold";
    text.style.color= "blue";
    text.style.textDecoration= "underline";
 }
 
  function boringfont()
   {
    var text = document.getElementById("feedme");
    text.style.fontSize = "initial";
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration= "none";
 }
 

 function moos() 
 {
    var suffix = '-Moo',
    txt = document.getElementById('feedme');
    txt.style.textTransform="uppercase";
    txt.value = txt.value.split('.').join('') + suffix;
    
 }


 