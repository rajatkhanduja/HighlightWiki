var range = null;
alert ("asd");
 
chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
  console.error ("Listening.");
  switch(request.message)
  {
    case 'setText':
      alert ("received");
      range = request.data;
      break;
     
    default:
      sendResponse({data: 'Invalid arguments'});
    break;
  }
});
 
 
var savetext = function (info,tab){
  var jax = new XMLHttpRequest();
  jax.open("POST","http://localhost/text/");
  jax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  jax.send("text="+seltext);
  jax.onreadystatechange = function() { if(jax.readyState==4) { alert(jax.responseText);  }}
}
 
var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++)
{
  var context = contexts[i];
  chrome.contextMenus.create({"title": "Highlight", "contexts":[context], "onclick": savetext});  
}
 
