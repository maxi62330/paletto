'use strict';

var Engine = function(){
    var plateau;
    var nbBille = 0;

    this.init = function(){
        plateau = new Array(6);
        for(var i = 0; i < plateau.length ; i++)
        {
            plateau[i] = new Array(6);
            for(var o = 0; o < 6 ; o++)
            {
                plateau[i][o] = "o";
            }
        }

        // Noir : N
        // Vert : G
        // Blanc : W
        // Bleu : B
        // Rouge : R
        // Jaune : Y

        // COLONNE 1
        this.placerBille("a1" , "N");
        //this.placerBille("a2" , "N"); // TESTER HISTOIRE 2
        this.placerBille("a2" , "Y");
        this.placerBille("a3" , "B");
        this.placerBille("a4" , "R");
        this.placerBille("a5" , "W");
        this.placerBille("a6" , "Y");

        // COLONNE 2
        this.placerBille("b1" , "G");
        this.placerBille("b2" , "W");
        this.placerBille("b3" , "Y");
        this.placerBille("b4" , "N");
        this.placerBille("b5" , "G");
        this.placerBille("b6" , "B");

        // COLONNE 3
        this.placerBille("c1" , "W");
        this.placerBille("c2" , "G");
        this.placerBille("c3" , "B");
        this.placerBille("c4" , "R");
        this.placerBille("c5" , "Y");
        this.placerBille("c6" , "N");

        // COLONNE 4
        this.placerBille("d1" , "B");
        this.placerBille("d2" , "R");
        this.placerBille("d3" , "W");
        this.placerBille("d4" , "G");
        this.placerBille("d5" , "N");
        this.placerBille("d6" , "R");

        // COLONNE 5
        this.placerBille("e1" , "R");
        this.placerBille("e2" , "Y");
        this.placerBille("e3" , "N");
        this.placerBille("e4" , "B");
        this.placerBille("e5" , "Y");
        this.placerBille("e6" , "G");

        // COLONNE 6
        this.placerBille("f1" , "W");
        this.placerBille("f2" , "B");
        this.placerBille("f3" , "R");
        this.placerBille("f4" , "W");
        this.placerBille("f5" , "G");
        this.placerBille("f6" , "N");
        return true;
    };
// private attributes and methods

// public methods
    this.placerBille = function(position, couleur){
        var retour = false;
        var couleurBille = couleur;

        var x = position.charCodeAt(1) - 49;
        var y = position.charCodeAt(0) - 97;

        if(plateau[x][y] == "o") {
            if (TesterJuxtaposition(position, couleur) == true)
            {
                plateau[x][y] = couleurBille;
                retour = true;
                console.log("Le joueur " + couleur + " a placer sur [" + position.charAt(0) + "][" + position.charAt(1) + "] ");
                nbBille++;
            }
            else
            {
                console.log("Une autre bille de la meme couleur est deja positionner a cote.");
            }
        }
        else
            console.log("IMPOSSIBLE : Le case ["+ position.charAt(0) + "][" + position.charAt(1) + "] est deja occupe");

        return retour;
    };

    function TesterJuxtaposition(position, couleur){
        var IsGood = true;

        var x = position.charCodeAt(1) - 49;
        var y = position.charCodeAt(0) - 97;

        if(x > 0)
        {
            if(plateau[x-1][y] == couleur)
                IsGood = false;
        }

        if(x < 5)
        {
            if(plateau[x+1][y] == couleur)
                IsGood = false;
        }


        if(y > 0)
        {
            if(plateau[x][y-1] == couleur)
                IsGood = false;
        }

        if(y < 5)
        {
            if(plateau[x][y+1] == couleur)
                IsGood = false;
        }

        return IsGood;
    };

    this.testerCouleurCoin = function(couleur){
        var retour = false;

        if((plateau[0][0] == couleur) || (plateau[0][5] == couleur) || (plateau[5][0] == couleur) || (plateau[5][5] == couleur))
        {
            retour = true;
            console.log("La couleur existe dans les coins");
        }
        else
            console.log("La bille de couleur n'existe pas dans les coins");

        return retour;
    }
};
