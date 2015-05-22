describe('payLessController', function(){

  beforeEach(module('payLessShop'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('payLessController');
  }));

  it('initialises with an empty basket', function(){
    expect(ctrl.basket).toBeUndefined();
  });

});
