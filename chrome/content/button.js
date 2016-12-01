CustomButton = {

1: function () {

var  messenger = Components.classes["@mozilla.org/messenger;1"]
                       .createInstance(Components.interfaces.nsIMessenger);

var  url = "http://sci.esa.int/"
//var msgURI = messenger.GetLoadedMessage();
  //alert( " Will open "+  url)	
var uri = Components
  .classes["@mozilla.org/network/simple-uri;1"]
  .getService(Components.interfaces.nsIURI)

uri.spec = url

Components
  .classes["@mozilla.org/uriloader/external-protocol-service;1"]
  .getService(Components.interfaces.nsIExternalProtocolService)
  .loadUrl(uri)

  },
}

window.addEventListener("load", loadFunction, false);

function loadFunction(){ 
    	window.removeEventListener("load", loadFunction, false); // remove listener, no longer needed
	myExtension.init(); 
};

var myExtension = {
  init: function() {
    var appcontent = document.getElementById("appcontent");   // browser
    if(appcontent)
      appcontent.addEventListener("DOMContentLoaded", myExtension.onPageLoad, true);
    var messagepane = document.getElementById("messagepane"); // mail
    if(messagepane)
      messagepane.addEventListener("load", function myfunc(event) { 
    	      messagepane.removeEventListener("load", myfunc, false); // remove listener, no longer needed
	      myExtension.onPageLoad(event); }, true);
    },

  onPageLoad: function(aEvent) {
    var doc = aEvent.originalTarget; // doc is document that triggered "onload" event
    // do something with the loaded page.
    // doc.location is a Location object (see below for a link).
    // You can use it to make your code executed on certain pages only.
   //var messagepane = document.getElementById("messagepane"); // mail
	// doc has body/div/pre then the email..
   var pre = doc.body.children[0].children[0]
   var ank = pre.children[0]
   //var rest = pre.textContent
// structure is text  then Anchor - then text ..
    if (ank.text.match("MASFLOW")) {
	var url= "";
// if you modify the document the link goes ..
	var rest = pre.textContent.replace("\\","/")
	rest = rest.replace("FLOW\n","FLOW")
	var lines = rest.split("\n");
	for(var i=0  ; i < lines.length; ++i) {
	   if (lines[i].match("http")) 
		url=lines[i];
	}
//      alert("a page is loaded "+ url);
	ank.href=url;
    }
// NEW masflow thing ..
// NEW ALLFLOW -- MAY 2016 only esaapp
    if (ank.text.match("esaapp")) {
	var url= "";
	var rest = pre.textContent.replace("\\","/")
	rest = rest.replace("admin\n","admin")
	var lines = rest.split("\n");
	for(var i=0  ; i < lines.length; ++i) {
	   if (lines[i].match("http")) 
		url=lines[i];
	}
	ank.href=url;
    }

  }


}
