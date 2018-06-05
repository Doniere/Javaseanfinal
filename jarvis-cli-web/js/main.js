 var root = 'http://localhost:3000/#';
 var useHash = true;
 var hash = '#';
 var router = new Navigo(root, useHash, hash);

 
 router
   .on(function () {
   var content = document.getElementById('content')
   content.innerHTML = 'Hello from Navigo Router!'
 })
 .resolve();
