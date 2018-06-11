var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-component')
var CaptainamericaDetailPage = function() {

  //  Menu()

  var content = document.getElementById('content')
  var button = document.createElement('button')
  button.onclick = function(){
    window.location.href = 'http://marvel.com/universe/Captain_America_(Steve_Rogers)#axzz5I4yEHq5E'
  }
  button.innerHTML = 'Get Captain-America Info'

    var card = document.createElement('div')
    card.className = 'w3-card-4'
    var img = document.createElement('img')
    img.src = 'assets/captainamerica.png'
    card.append(img)
   
  content.append(card)

  content.append(button)

}
module.exports = CaptainamericaDetailPage
