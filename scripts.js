var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

let aliveStatus = true; 

xhr.onload = function (){
   if (xhr.status >= 200 && xhr.status < 300){
       console.log('success!')
       let response = xhr.responseText;
       console.log(response);
       if(response.search('died') !== -1){
           aliveStatus = true;
           console.log('yay!')
       } else {
           aliveStatus = false;
       }
   } else {
       console.log('error', )
   }
}

xhr.open('GET', 'https://en.wikipedia.org/w/api.php?action=parse&format=json&page=David_Schwimmer&section=1' );
xhr.send();