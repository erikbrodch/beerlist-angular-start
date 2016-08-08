app.controller('beerCntrl', function($scope, beerService) {

  //connect allmovies section to array
  $scope.allBeers = beerService.allBeers;




  $scope.addBeer = function() {
    var newBeer = {
      name: $scope.name,
      style: $scope.style,
      abv: $scope.abv,
      img: $scope.image
    }
    console.log(newBeer.img)
    beerService.addBeer(newBeer)

  }

  $scope.removeBeer = function(index) {
    beerService.removeBeer (index)
  } 

});