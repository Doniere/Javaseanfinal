var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-component')
var HulkDetailPage = function() {

  Menu()
  var content = document.getElementById('content')
var button = document.createElement('button')
button.onclick = getAvengers
button.innerHTML = 'Get Avengers'

var card = document.createElementById('div')
card.className'w3-card-4'
var img = document.createElement('img')
img.src = '../app/assets/littlehulk.png'
card.append(img)


content.append(h1)
content.append(button)}
module.exports = HulkDetailPage


