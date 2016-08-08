app.service('beerService', function(){

   var allBeers = [{name: "Goldstar", Style: "lager", abv: "4%", img:"http://cdn.timesofisrael.com/uploads/2015/04/Gold.jpg"},
   {name: "Maccabi", Style: "lager", abv: "5%", img:"https://upload.wikimedia.org/wikipedia/commons/1/1d/Makabi_beer.jpg"},
   {name: "Daura GF", Style: "lager", abv: "5%", img:"http://1.bp.blogspot.com/_BihBQIG3Ccg/TKuVCwTMjuI/AAAAAAAADWs/6h1JjCmngSE/s1600/20101005_2078.jpg"}]


  var addBeer = function(newBeer) {
      allBeers.push(newBeer)
  }
  var removeBeer = function(index) {
    allBeers.splice([index], 1)
  }

return {allBeers: allBeers, addBeer: addBeer, removeBeer: removeBeer} 
});
  