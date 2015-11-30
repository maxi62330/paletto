'use strict';

var Engine = function(){
    var plateau;
    var nbBille = 0;

    var joueur1 = "";

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
        this.placerBille("a1" , "N"); // N
        //this.placerBille("a2" , "N"); // TESTER HISTOIRE 2
        this.placerBille("a2" , "Y");
        this.placerBille("a3" , "B");
        this.placerBille("a4" , "R");
        this.placerBille("a5" , "W");
        this.placerBille("a6" , "Y");

        // COLONNE 2
        this.placerBille("b1" , "G"); // G
        this.placerBille("b2" , "W");
        this.placerBille("b3" , "Y");
        this.placerBille("b4" , "N");
        this.placerBille("b5" , "G");
        this.placerBille("b6" , "B");

        // COLONNE 3
        this.placerBille("c1" , "W"); // W
        this.placerBille("c2" , "G");
        this.placerBille("c3" , "B");
        this.placerBille("c4" , "R");
        this.placerBille("c5" , "Y");
        this.placerBille("c6" , "N");

        // COLONNE 4
        this.placerBille("d1" , "B"); // B
        this.placerBille("d2" , "R");
        this.placerBille("d3" , "W");
        this.placerBille("d4" , "G");
        this.placerBille("d5" , "N");
        this.placerBille("d6" , "R");

        // COLONNE 5
        this.placerBille("e1" , "R"); // R
        this.placerBille("e2" , "Y");
        this.placerBille("e3" , "N");
        this.placerBille("e4" , "B");
        this.placerBille("e5" , "Y");
        this.placerBille("e6" , "G");

        // COLONNE 6
        this.placerBille("f1" , "W"); //W
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
                console.log("La bille " + couleur + " a ete placer sur [" + position.charAt(0) + "][" + position.charAt(1) + "] ");
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

        if(couleur != "o") {
            if (x > 0) {
                if (plateau[x - 1][y] == couleur)
                    IsGood = false;
            }

            if (x < 5) {
                if (plateau[x + 1][y] == couleur)
                    IsGood = false;
            }


            if (y > 0) {
                if (plateau[x][y - 1] == couleur)
                    IsGood = false;
            }

            if (y < 5) {
                if (plateau[x][y + 1] == couleur)
                    IsGood = false;
            }
        }

        return IsGood;
    };

    this.testerCouleurDisponible = function(couleur){
        var retour = false;

        if((plateau[0][0] == couleur) || (plateau[0][5] == couleur) || (plateau[5][0] == couleur) || (plateau[5][5] == couleur))
        {
            retour = true;
            console.log("La couleur "+couleur+" est disponible");
        }
        else
            console.log("La bille de couleur "+couleur+" n'est pas disponible");




        return retour;
    };

    function recupererCouleurDisponible() {

        console.log("RECUPERER LISTE BILLE VOISINE A1");
        var listebille = RecupererListeBilleVoisine("a1");

        for(var p= 0; p < listebille.length ; p++)
        {
            console.log(" - "+listebille[p]);
        }

        var couleurDispo = new Array();
        var BilleEnlevable = new Array();

        for(var i = 0; i < plateau.length ; i++)
        {
            for(var o = 0; o < 6 ; o++)
            {
                var nbbille = NbBilleVoisine(i,o);
                if(nbbille < 3)
                {
                   //console.log("[" + i + "][" + o + "] : Il y a " + nbbille + " bille voisines");

                    couleurDispo.push(plateau[i][o]);
                    BilleEnlevable.push(String.fromCharCode(i + 97) + "" + (o + 1));

                }
            }
        }
        console.log("");
        console.log("COULEUR DISPONIBLE A LA SELECTION");
        for(var u = 0; u<couleurDispo.length ; u++)
        {
            console.log("-- "+couleurDispo[u] +" " + BilleEnlevable[u]);
        }

        return BilleEnlevable;
    };

    function NbBilleVoisine(posX, posY) {
        var x = posX;
        var y = posY;

        var NbbilleVoisine = 0;

        if (x > 0) {
            if (plateau[x - 1][y] == "o") {
                NbbilleVoisine++;
            }
        }
        else
            NbbilleVoisine++;

        if (x < 5) {
            if (plateau[x + 1][y] == "o") {
                NbbilleVoisine++;
            }
        }
        else
            NbbilleVoisine++;

        if (y > 0) {
            if (plateau[x][y - 1] == "o") {
                NbbilleVoisine++;
            }
        }
        else
            NbbilleVoisine++;

        if (y < 5) {
            if (plateau[x][y + 1] == "o") {
                NbbilleVoisine++;
            }
        }
        else
            NbbilleVoisine++;


        return (4 - NbbilleVoisine);

    };

    function RecupererListeBilleVoisine(position){
        var x = position.charCodeAt(1) - 49;
        var y = position.charCodeAt(0) - 97;

        var listeBilleVoisine = new Array();


        if (x > 0) {
            if (plateau[x - 1][y] != "o") {
                listeBilleVoisine.push(String.fromCharCode(x-1+97)+""+(y+1));
            }
        }

        if (x < 5) {
            if (plateau[x + 1][y] != "o") {
                listeBilleVoisine.push(String.fromCharCode(x+1+97)+""+(y+1));
            }
        }

        if (y > 0) {
            if (plateau[x][y - 1] != "o") {
                listeBilleVoisine.push(String.fromCharCode(x+97)+""+(y-1+1));
            }
        }

        if (y < 5) {
            if (plateau[x][y + 1] != "o") {
                listeBilleVoisine.push(String.fromCharCode(x+97)+""+(y+1+1));
            }
        }

        return listeBilleVoisine;
    }

    this.EnleverBille = function(position , joueur) {
        var x = position.charCodeAt(1) - 49;
        var y = position.charCodeAt(0) - 97;

        var retour = false;

        var ListeBilleDisponible =  recupererCouleurDisponible();
        var ListeBilleVoisinePrincipal =   RecupererListeBilleVoisine(position);

        if(ListeBilleDisponible.indexOf(position) != -1)
        {
            if(ListeBilleVoisinePrincipal.length == 2) {
                var voisin1 = RecupererListeBilleVoisine(ListeBilleVoisinePrincipal[0].charAt(0) + "" + ListeBilleVoisinePrincipal[0].charAt(1));
                var voisin2 = RecupererListeBilleVoisine(ListeBilleVoisinePrincipal[1].charAt(0) + "" + ListeBilleVoisinePrincipal[1].charAt(1));

                for (var a = 0; a < voisin1.length; a++) {
                    if (voisin1.indexOf(voisin2[a]) != -1) {
                        // IL EXISTE DES VOISIN COMMUN
                        console.log("----------- IL Y A UN VOISIN COMMUN " + voisin2[a]);
                        console.log("on peut supprimer la bille");
                    }
                    else
                    {
                        console.log("LA BILLE NE PEUT PAS ETRE ENLEVER, C'EST UNE BILLE PILLIER !");
                    }
                }
            }

            if(plateau[x][y] != "o")
            {
                joueur1 += plateau[x][y]+";";
                plateau[x][y] = "o";
                retour = true;
                console.log("Le joueur "+joueur+" a enlever la bille "+plateau[x][y] + " de la case "+position);
                this.NbBilleJoueur(1);
            }
            else
            {
                retour = false;
                console.log("La case est déjà vide");
            }
        }
        else
        {
            retour = false;
        }


        return retour;
    };

    this.NbBilleJoueur = function(joueur) {

        var noir = 0;
        var vert = 0;
        var blanc = 0;
        var bleu = 0;
        var rouge = 0;
        var jaune = 0;

        if(joueur == 1)
        {
            var chaineNbBilleJoueur = joueur1.split(";");
            for(var i = 0; i < chaineNbBilleJoueur.length ; i++)
            {
                if(chaineNbBilleJoueur[i] == "N")
                    noir++;

                if(chaineNbBilleJoueur[i] == "G")
                    vert++;

                if(chaineNbBilleJoueur[i] == "W")
                    blanc++;

                if(chaineNbBilleJoueur[i] == "B")
                    bleu++;

                if(chaineNbBilleJoueur[i] == "R")
                    rouge++;

                if(chaineNbBilleJoueur[i] == "Y")
                    jaune++;
            }
        }

        console.log("Le joueur "+joueur+ " a  N:"+noir+" G:"+vert+" W:"+blanc+" B:"+bleu+" R:"+rouge+ " Y:"+jaune);

    };
};

/*
Utiliser la fonction Recuperer liste bille voisine
Calcule combien les bille principale avec la fonction bille voisine
Avant de supprimer un bille il faut:
    Vérifier que la bille à moins de 3 voisin (Créer fonction qui compte le nombre de bille à partir de la fonction (Liste bille voisine))
    SI il a moin de 3 voisin on vérifie que la bille prinpale n'est pas porteuse du plateau


 */