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

PalettoTestCase.prototype.testHistoire6 = function(){
    assertTrue(monPlateau1.init());

    console.log("");
    console.log("-------------------  J1  -----------------------");
    assertTrue(monPlateau1.EnleverBille("a1", 1));
    assertTrue(monPlateau1.EnleverBille("f6", 1));

    console.log("");
    console.log("-------------------  J2  -----------------------");
    assertTrue(monPlateau1.EnleverBille("b1", 2));
    assertTrue(monPlateau1.EnleverBille("e6", 2));
    assertTrue(monPlateau1.EnleverBille("f5", 2));

    console.log("");
    console.log("-------------------  J1  -----------------------");
    assertTrue(monPlateau1.EnleverBille("a2", 1));
    assertTrue(monPlateau1.EnleverBille("a6", 1));

    console.log("");
    console.log("-------------------  J2  -----------------------");
    assertTrue(monPlateau1.EnleverBille("a3", 2));

    console.log("");
    console.log("-------------------  J1  -----------------------");
    assertTrue(monPlateau1.EnleverBille("a5", 1));
    assertTrue(monPlateau1.EnleverBille("f4", 1));
    assertTrue(monPlateau1.EnleverBille("f1", 1));
    assertTrue(monPlateau1.EnleverBille("c1", 1));

    console.log("");
    console.log("-------------------  J2  -----------------------");
    assertTrue(monPlateau1.EnleverBille("e1", 2));
    assertTrue(monPlateau1.EnleverBille("f3", 2));
    assertTrue(monPlateau1.EnleverBille("d6", 2));
    assertTrue(monPlateau1.EnleverBille("a4", 2));

    console.log("");
    console.log("-------------------  J1  -----------------------");
    assertTrue(monPlateau1.EnleverBille("d1", 1));//d3
    assertTrue(monPlateau1.EnleverBille("f2", 1));
    assertTrue(monPlateau1.EnleverBille("b6", 1));

    console.log("");
    console.log("-------------------  J2  -----------------------");
    assertTrue(monPlateau1.EnleverBille("b2", 2));//b3
    assertTrue(monPlateau1.EnleverBille("e2", 2));
    assertTrue(monPlateau1.EnleverBille("e5", 2));

    console.log("");
    console.log("-------------------  J1  -----------------------");
    assertTrue(monPlateau1.EnleverBille("b5", 1));//b4
        assertTrue(monPlateau1.EnleverBille("b4", 1));// CORRECTION BUG ENONCE TP
    assertTrue(monPlateau1.EnleverBille("c6", 1));
    assertTrue(monPlateau1.EnleverBille("d5", 1));
    assertTrue(monPlateau1.EnleverBille("e3", 1));

    assertTrue(monPlateau1.VerificationJoueurGagnant(1));
};