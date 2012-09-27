/*
 * Part of the HighlightWiki Project
 * Author : Rajat Khanduja
 */

var appendHighlightTags = function (text) {
  return "<span style='background-color:yellow;'>" + text + "</span>"
};

$(document).mouseup(function(event){
  highlighterOn = true;
  if (highlighterOn){
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var sel = range.extractContents();
    var span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.appendChild(sel);
    range.insertNode(span);
  }

  if(sel.length) {
    console.error ("Sending ...");
    chrome.extension.sendRequest({'message':'setText','data': range},function(response){})
  }
    console.error ("Sent");
  });

$(function(){
  console.error ("working");
/*  var img = document.createElement("img");
  img.src=chrome.extension.getURL("Highlighter Yellow.png");
  img.style.position="fixed";
  img.style.top=100;
  $("body").append(img);*/
});


