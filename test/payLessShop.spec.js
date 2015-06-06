describe('payLessCtrl', function(){

  beforeEach(module('payLessShop'));

  it('will be created with items list of 12', inject(function($controller) {
    var scope = {},
        ctrl = $controller('payLessCtrl', {$scope:scope});

    expect(scope.items.length).toBe(13);
  }));

  describe('Basket', function(){

    it('basket will be initialized empty', inject(function($controller){
      var scope = {};
          ctrl = $controller('payLessCtrl', {$scope:scope});

      expect(scope.basket).toEqual([]);
    }));

    it('item price can be added to basket', inject(function($controller){
      var scope= {};
        ctrl = $controller('payLessCtrl', {$scope:scope});

      scope.addItem({name: 'Almond Toe Court Shoes', quantity: '1'})
      expect(scope.basket.length).toBe(1);
    }));

  });
});
