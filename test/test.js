'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var monPlateau =  new Engine();

PalettoTestCase.prototype.testHistoire1 = function(){
    assertTrue(monPlateau.init());
};

PalettoTestCase.prototype.testHistoire2 = function(){
    assertTrue(monPlateau.testerCouleurCoin("Y"));
};
