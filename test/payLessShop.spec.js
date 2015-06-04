describe('payLessCtrl', function(){

  beforeEach(module('payLessShop'));

  it('will be created with items list of 12', inject(function($controller) {
    var scope = {},
        ctrl = $controller('payLessCtrl', {$scope:scope});

    expect(scope.items.length).toBe(13);
  }));

});
