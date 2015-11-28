
var g=document.getElementById('cform1').value;
alert(' hello ' + g );


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://itunes.apple.com/search?movie", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // WARNING! Might be evaluating an evil script!
     alert(xhr.responseText);
      var resp = JSON.parse(xhr.responseText);
     alert(resp.resultCount);
   // var resp = eval("(" + xhr.responseText + ")");
    //alert(resp);
     document.getElementsByName("dsrchkey")[0].value = xhr.responseText;
  }
}
xhr.send();