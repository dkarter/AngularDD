var app = angular.module('myapp',[])
  .controller('MyCtrl', function($scope) {
   $scope.test = 'hello world';
   $scope.select = function (value) {
    $scope.selected = value;
   };
   $scope.categories = {
    data: [
      {
        "object_type": "category",
        "id": "1",
        "name": "Bakery",
        "shortname": "bakery"
      },
      {
        "object_type": "category",
        "id": "2",
        "name": "Candy Shop",
        "shortname": "candy"
      },
      {
        "object_type": "category",
        "id": "3",
        "name": "Granola Company",
        "shortname": "granola"
      },
      {
        "object_type": "category",
        "id": "4",
        "name": "Food Bars",
        "shortname": "foodbar"
      },
      {
        "object_type": "category",
        "id": "5",
        "name": "Snacks Business",
        "shortname": "snack"
      },
      {
        "object_type": "category",
        "id": "6",
        "name": "Cafe’s",
        "shortname": "cafe"
      },
      {
        "object_type": "category",
        "id": "7",
        "name": "Coffee Roaster",
        "shortname": "roaster"
      },
      {
        "object_type": "category",
        "id": "8",
        "name": "Coffee House",
        "shortname": "coffeehouse"
      },
      {
        "object_type": "category",
        "id": "9",
        "name": "Organic Juice",
        "shortname": "juice"
      },
      {
        "object_type": "category",
        "id": "10",
        "name": "Sodas",
        "shortname": "sodas"
      },
      {
        "object_type": "category",
        "id": "11",
        "name": "Restaurants",
        "shortname": "restaurant"
      },
      {
        "object_type": "category",
        "id": "12",
        "name": "Bars",
        "shortname": "bar"
      },
      {
        "object_type": "category",
        "id": "13",
        "name": "Breweries",
        "shortname": "breweries"
      },
      {
        "object_type": "category",
        "id": "14",
        "name": "Distilleries",
        "shortname": "distilleries"
      },
      {
        "object_type": "category",
        "id": "15",
        "name": "Auto body",
        "shortname": "autobody"
      },
      {
        "object_type": "category",
        "id": "16",
        "name": "Construction",
        "shortname": "construction"
      },
      {
        "object_type": "category",
        "id": "17",
        "name": "Real estate",
        "shortname": "realestate"
      },
      {
        "object_type": "category",
        "id": "18",
        "name": "Technology",
        "shortname": "technology"
      },
      {
        "object_type": "category",
        "id": "19",
        "name": "Professional Services",
        "shortname": "professionalservices"
      }
    ]
  };
  $scope.selected = $scope.categories.data[0];
 });