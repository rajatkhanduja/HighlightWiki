/*
 * Part of the HighlightWiki Project
 * Author : Rajat Khanduja
 */

var appendHighlightTags = function (text) {
  return "<span style='background-color:yellow;'>" + text + "</span>"
};

$(document).mouseup(function(event)
{
    var sel = window.getSelection().toString();
    if(sel.length)
        chrome.extension.sendRequest({'message':'setText','data': sel},function(response){})
})

$(function(){
  alert ("working");
});


