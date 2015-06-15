describe('payLessCtrl', function(){

  beforeEach(module('payLessShop'));

  describe('Basket', function(){

    var scope, ctrl, controller;

    it('will be created with items list of 12', inject(function($controller) {
      var scope = {},
          ctrl = $controller('payLessCtrl', {$scope:scope});

      expect(scope.items.length).toBe(13);
    }));

    it('basket will be initialized empty', inject(function($controller){
      var scope = {};
          ctrl = $controller('payLessCtrl', {$scope:scope});

      expect(scope.basket).toEqual([]);
    }));

    it('item can be added to basket', inject(function($controller){
      var scope= {};
        ctrl = $controller('payLessCtrl', {$scope:scope});

      scope.addItem({name: 'Almond Toe Court Shoes', quantity: '1'})
      expect(scope.basket.length).toBe(1);
    }));

    it('Item can be removed', inject(function($controller){
      var scope = {};
          ctrl = $controller('payLessCtrl', {$scope:scope});

      scope.addItem({name: 'Almond Toe Court Shoes', quantity: '1'})
      expect(scope.basket.length).toBe(1);
      scope.removeItem({name: 'Almond Toe Court Shoes', quantity: '1'});
      expect(scope.basket.length).toBe(0);
    }));

    it('Calculates total', inject(function($controller){
      var scope = {};
          ctrl = $controller('PayLessCtrl', {$scope:scope});

      scope.addItem({name: 'Almond Toe Court Shoes', quantity: '1'});
      expect(scope.calculateBasketTotal()).toEqual(50);
    }));

  });
});
