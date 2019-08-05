var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

let aliveStatus = true; 

xhr.onload = function (){
   if (xhr.status >= 200 && xhr.status < 300){
       let response = xhr.responseText;
       if(response.search('died') === -1){
           aliveStatus = true;
       } else {
           aliveStatus = false;
       }
   } else {
       console.log('error', )
   }
   console.log('David is alive: ' + aliveStatus)
}

xhr.open('GET', 'https://en.wikipedia.org/w/api.php?action=parse&format=json&page=David_Schwimmer&section=0' );
xhr.send();