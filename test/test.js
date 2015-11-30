'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var monPlateau =  new Engine();

PalettoTestCase.prototype.testHistoire1 = function(){
    assertTrue(monPlateau.init());

};

PalettoTestCase.prototype.testHistoire2 = function(){
    assertTrue(monPlateau.testerCouleurDisponible("Y"));
};

PalettoTestCase.prototype.testHistoire3 = function(){
    assertTrue(monPlateau.EnleverBille("a6", 1));
};

PalettoTestCase.prototype.testHistoire4 = function(){
    assertTrue(monPlateau.EnleverBille("a1", 2));
    assertTrue(monPlateau.EnleverBille("f6", 2));
};