var createCard = require('./card-component') 
var getAvengers = function() {
   var req = new XMLHttpRequest()
    req.onreadystatechange = function() {
          if(req.readyState == 4){
                createCard(JSON.parse(this.responseText)) 
                }
        }
     
    req.open('Get', 'http://localhost:3000')
    req.send()
}

module.exports = getAvengers 
