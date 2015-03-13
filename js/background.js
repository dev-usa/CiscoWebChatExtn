chrome.extension.onRequest.addListener(     //listen to requests
  function(request, sender, sendResponse) {
    //console.log(sender.tab ?
    //            "from a content script:" + sender.tab.url :
    //            "from the extension");
    //alert("chat message = " + request.chatMessage);
	
	// chat subject copied for future purposes - not used right now
	//alert("chat subject = " + request.chatSubject); 
	copyTextToClipboard( request.chatMessage );
  });
  
// Copy provided text to the clipboard.
function copyTextToClipboard(argText) {
  //alert('From copyTextToClipboard()');
  //console.log('Before - ' + $("#tempAreaForDataCopy").text());
  $("#tempAreaForDataCopy").text(argText);
  //console.log('After - ' + $("#tempAreaForDataCopy").text());
  $("#tempAreaForDataCopy").focus().select();
  //document.execCommand('copy');
  document.execCommand('copy', false, null);
  //alert('Data copied to clipboard!');
}
