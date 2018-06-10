var createCard = require('./card-component') 
var getAvengers = function() {
   var req = new XMLHttpRequest()
    req.onreadystatechange = function() {
          if(req.readyState == 4 && req.status == 200){
                createCard(JSON.parse(req.responseText)) 
                }
        }
     
    req.open('Get', 'http://slattaker.tgb.ninja:4000')
    req.send()
}

module.exports = getAvengers 
