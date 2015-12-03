'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var monPlateau =  new Engine();
var monPlateau1 =  new Engine();

PalettoTestCase.prototype.testHistoire1 = function(){
    console.log("");
    console.log(" --- HISTOIRE 1 ---");
    assertTrue(monPlateau.init());
};

PalettoTestCase.prototype.testHistoire2 = function(){
    console.log("");
    console.log(" --- HISTOIRE 2 ---");
    assertTrue(monPlateau.testerCouleurCoinDisponible("Y"));
};

PalettoTestCase.prototype.testHistoire3 = function(){
    console.log("");
    console.log(" --- HISTOIRE 3 ---");
    assertTrue(monPlateau.EnleverBille("a6", 1));
};

PalettoTestCase.prototype.testHistoire4 = function(){
    console.log("");
    console.log(" --- HISTOIRE 4 ---");
    assertTrue(monPlateau.EnleverBille("a1", 2));
    assertTrue(monPlateau.EnleverBille("f6", 2));
};

PalettoTestCase.prototype.testHistoire5 = function(){
    console.log("");
    console.log(" --- HISTOIRE 5 ---");

    //assertTrue(monPlateau.EnleverBille("a1", 1));
    //assertTrue(monPlateau.EnleverBille("f6", 1));
    assertTrue(monPlateau.EnleverBille("f5", 1));
    assertTrue(monPlateau.EnleverBille("e6", 1));
    assertTrue(monPlateau.EnleverBille("b1", 1));
    assertTrue(monPlateau.EnleverBille("e5", 1));
    assertTrue(monPlateau.EnleverBille("a2", 1));
    //assertTrue(monPlateau.EnleverBille("a6", 1));
    assertTrue(monPlateau.EnleverBille("f4", 1));
    assertTrue(monPlateau.EnleverBille("b2", 1));
    assertTrue(monPlateau.EnleverBille("c1", 1));
    assertTrue(monPlateau.EnleverBille("a5", 1));
    assertTrue(monPlateau.EnleverBille("a3", 1));
    assertTrue(monPlateau.EnleverBille("b6", 1));
    assertTrue(monPlateau.EnleverBille("b3", 1));
    assertTrue(monPlateau.EnleverBille("c2", 1));
    assertTrue(monPlateau.EnleverBille("f3", 1));
    assertTrue(monPlateau.EnleverBille("f2", 1));
    assertTrue(monPlateau.EnleverBille("e4", 1));
    assertTrue(monPlateau.EnleverBille("d6", 1));
    assertTrue(monPlateau.EnleverBille("d5", 1));
    assertTrue(monPlateau.EnleverBille("d4", 1));
    console.log("Pret");
    assertFalse(monPlateau.EnleverBille("c3", 1));
};
