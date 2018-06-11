var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-component')
var SpidermanDetailPage = function() {

  //  Menu()
  var content = document.getElementById('content')
  var button = document.createElement('button')
  button.onclick = function(){
window.location.href = 'http://marvel.com/universe/Spider-Man_(Peter_Parker)#axzz5I4yEHq5E'

  }
  button.innerHTML = 'Get Spider-Man Info'

   var card = document.createElement('div')
   card.className = 'w3-card-4'
   var img = document.createElement('img')
   img.src = 'assets/spiderman.png'
   card.append(img)
   
  content.append(card)
  content.append(button)
}
  module.exports = SpidermanDetailPage
