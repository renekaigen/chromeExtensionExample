var rene="sss";


function hello() {
//rene=document.getElementById('clickme').value;



  chrome.tabs.executeScript({
    file: 'alert.js'

  }); 
}




document.getElementById('clickme').addEventListener('click', hello);