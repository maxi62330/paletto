'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var monPlateau =  new Engine();

PalettoTestCase.prototype.testHistoire1 = function(){
    assertTrue(monPlateau.init());
};
