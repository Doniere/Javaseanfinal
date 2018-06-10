var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-component')
var HulkDetailPage = function(){

 Menu()

 var content = document.getElementById('content')
 content.innerHTML = 'This is the Hulks detail page'
}

module.exports = HulkDetailPage
