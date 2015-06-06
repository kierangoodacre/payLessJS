var payLessShop = angular.module('payLessShop', []);

payLessShop.controller('payLessCtrl', function($scope){
  $scope.items = [
    {
      "name": "Almond Toe Court Shoes",
      "id": "0",
      "description": "Patent Black",
      "category": "Women's Footwear",
      "price": 99.00,
      "quantity": 5,
      "imageUrl": "images/products/0.jpg",
      "amountRequested": 0
    },
    {
      "name": "Suede Shoes",
      "id": "1",
      "description": "Blue",
      "category": "Women's Footwear",
      "price": 42.00,
      "quantity": 4,
      "imageUrl": "images/products/1.jpg",
      "amountRequested": 0
    },
    {
      "name": "Leather Saddle Loafers",
      "id": "2",
      "description": "Tan",
      "category": "Men's Footwear",
      "price": 34.00,
      "quantity": 12,
      "imageUrl": "images/2.jpg",
      "amountRequested": 0
    },
    {
      "name": "Flip Flops",
      "id": "3",
      "description": "Red",
      "category": "Men's Footwear",
      "price": 19.00,
      "quantity": 6,
      "imageUrl": "images/red_flip_flops.png",
      "amountRequested": 0
    },
    {
      "name": "Flip Flops",
      "id": "4",
      "description": "Blue",
      "category": "Men's Footwear",
      "price": 19.00,
      "quantity": 0,
      "imageUrl": "images/blue_flip_flops.jpg",
      "amountRequested": 0
    },
    {
      "name": "Gold Button Cardigan",
      "id": "5",
      "description": "Black",
      "category": "Women's Casualwear",
      "price": 167.00,
      "quantity": 6,
      "imageUrl": "images/cardigan.jpeg",
      "amountRequested": 0
    },
    {
      "name": "Cotton Shorts",
      "id": "6",
      "description": "Medium Red",
      "category": "Women's Casualwear",
      "price": 30.00,
      "quantity": 5,
      "imageUrl": "images/red_cotton_shorts.jpg",
      "amountRequested": 0
    },
    {
      "name": "Fine Short Sleeve Shirt",
      "id": "7",
      "description": "Grey",
      "category": "Men's Casualwear",
      "price": 49.99,
      "quantity": 9,
      "imageUrl": "images/grey_shirt.jpg",
      "amountRequested": 0
    },
    {
      "name": "Stripe Short Sleeve Shirt",
      "id": "8",
      "description": "Green",
      "category": "Men's Casualwear",
      "price": 49.99,
      "quantity": 3,
      "imageUrl": "images/green_shirt.jpg",
      "amountRequested": 0
    },
    {
      "name": "Sharkskin Waistcoat",
      "id": "9",
      "description": "Charcoal",
      "category": "Men's Formalwear",
      "price": 75.00,
      "quantity": 2,
      "imageUrl": "images/waistcoat.jpg",
      "amountRequested": 0
    },
    {
      "name": "Light Patch Pocket Blazer",
      "id": "10",
      "description": "Deer",
      "category": "Men's Formalwear",
      "price": 175.50,
      "quantity": 1,
      "imageUrl": "images/blazer.jpg",
      "amountRequested": 0
    },
    {
      "name": "Bird Print Dress",
      "id": "11",
      "description": "Black",
      "category": "Women's Formalwear",
      "price": 270.00,
      "quantity": 10,
      "imageUrl": "images/bird_print_dress.jpeg",
      "amountRequested": 0
    },
    {
      "name": "Mid Twist Cut-Out Dress",
      "id": "12",
      "description": "Pink",
      "category": "Women's Formalwear",
      "price": 540.00,
      "quantity": 5,
      "imageUrl": "images/pink_dress.jpg",
      "amountRequested": 0
    }
  ]

  $scope.basket = [];

  $scope.addItem = function(item){
    if(item.name === $scope.itemNameSearch(item).name) {
      $scope.basket.push(item.price);
    }
  };

  $scope.itemNameSearch = function(item) {
    for (var name in $scope.items) {
      if($scope.items.hasOwnProperty(name)) {
        var itemName = $scope.items[name];
        for (var prop in itemName) {
          if(itemName.hasOwnProperty(prop)) {
            return itemName;
          }
        }
      }
    }
  };

});
