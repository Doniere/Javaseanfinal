var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-component')
var HulkDetailPage = function() {

//Menu()
var content = document.getElementById('content')
var button = document.createElement('button')
button.onclick = function() {
window.location.href = 'http://marvel.com/universe/Hulk_(Bruce_Banner)#axzz5I4yEHq5E'

}


button.innerHTML = 'Get Hulk Info'
//If you want to redirect to marvel page
//look at card-component and use a similiar method... window.location.href <-- put in onClick function

var card = document.createElement('div')
card.className = 'w3-card-4'
var img = document.createElement('img')
img.src = 'assets/littlehulk.png'
card.append(img)

content.append(card)

content.append(button)

}
module.exports = HulkDetailPage


