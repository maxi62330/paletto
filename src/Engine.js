'use strict';

var Engine = function(){
    var plateau;
    var nbBille = 0;

    var joueur1 = "";
    var joueur2 = "";

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

        var x = position.charCodeAt(0) - 97;
        var y = position.charCodeAt(1) - 49;

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

        var x = position.charCodeAt(0) - 97;
        var y = position.charCodeAt(1) - 49;

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

    this.testerCouleurCoinDisponible = function(couleur){
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

    function billeDisponibleALaSelection() {

        var couleurDispo = new Array();  // Listes des couleurs pouvant être enlever
        var listeBilleEnlevable = new Array(); // Listes des billes pouvant être enlever

        for(var i = 0; i < plateau.length ; i++)
        {
            for(var o = 0; o < 6 ; o++)
            {
                if(plateau[i][o] != "o") {
                    var nbbille = RecupListBilleVoisine(String.fromCharCode(i + 97, o + 49)).length;
                    if (nbbille < 3) {
                        couleurDispo.push(plateau[i][o]);
                        listeBilleEnlevable.push(String.fromCharCode(i + 97, o + 49));
                    }
                }
            }
        }

        AfficherBilleDisponibleSelection(couleurDispo , listeBilleEnlevable);

        return listeBilleEnlevable;
    };

    function AfficherBilleDisponibleSelection(couleurDispo , listeBilleEnlevable) {
        console.log("");
        console.log("BILLE DISPONIBLE A LA SELECTION");
        for(var u = 0; u<couleurDispo.length ; u++)
        {
            console.log("-- "+couleurDispo[u] +" " + listeBilleEnlevable[u]);
        }
    }

    function RecupListBilleVoisine(position){
        var x = position.charCodeAt(0) - 97;// a
        var y = position.charCodeAt(1) - 49;// 1

        var listeBilleVoisine = new Array(); // forme :  "c3:B"   position:couleur

        if (x > 0) {
            if (plateau[x - 1][y] != "o") {
            listeBilleVoisine.push(String.fromCharCode(x-1+97)+""+(y+1)+":"+plateau[x-1][y] );
            }
        }

        if (x < 5) {
            if (plateau[x + 1][y] != "o") {
            listeBilleVoisine.push(String.fromCharCode(x+1+97)+""+(y+1)+":"+plateau[x+1][y] );
            }
        }

        if (y > 0) {
            if (plateau[x][y - 1] != "o") {
            listeBilleVoisine.push(String.fromCharCode(x+97)+""+(y-1+1)+":"+plateau[x][y-1] );
            }
        }

        if (y < 5) {
            if (plateau[x][y + 1] != "o") {
            listeBilleVoisine.push(String.fromCharCode(x+97)+""+(y+1+1)+":"+plateau[x][y+1] );
            }
        }

        return listeBilleVoisine;
    };

    this.EnleverBille = function(position , joueur) {
        var x = position.charCodeAt(0) - 97;
        var y = position.charCodeAt(1) - 49;

        var retour = false;

        var ListeBilleDisponibleSelection = billeDisponibleALaSelection();

        if(ListeBilleDisponibleSelection.indexOf(position) != -1)
        {
            /////////////////// ESSAI
            // On recupere la liste des bille voisine à la bille principale
            var ListeBilleVoisinePrincipal =   RecupListBilleVoisine(position);
                for(var p = 0; p < ListeBilleVoisinePrincipal.length ; p++){
                    console.log(("BILLE VOISINE DISPO "+ListeBilleVoisinePrincipal[p]));
                }

            var nbBilleEnCommun = 0;
            var EstBillePillier = false;

            if(ListeBilleVoisinePrincipal.length == 2)
            {
                // On recupère les billes voisines des voisines de la bille principale
                var voisin1 = RecupListBilleVoisine(ListeBilleVoisinePrincipal[0].charAt(0)+""+ListeBilleVoisinePrincipal[0].charAt(1));
                var voisin2 = RecupListBilleVoisine(ListeBilleVoisinePrincipal[1].charAt(0)+""+ListeBilleVoisinePrincipal[1].charAt(1));

                for(var p = 0; p < voisin1.length ; p++){
                    console.log(("VOISIN 1 +"+ListeBilleVoisinePrincipal[0]+" :"+voisin1[p]));
                }
                for(var p = 0; p < voisin2.length ; p++){
                    console.log(("VOISIN 2 +"+ListeBilleVoisinePrincipal[1]+" :"+voisin2[p]));
                }

                var NbPlusGrandeExploiration; // On prend la solution qui a le plus de bille voisine

                if(voisin1.length > voisin2)
                    NbPlusGrandeExploiration = voisin1.length;
                else
                    NbPlusGrandeExploiration = voisin2.length;

                // On viens comparé les 2 listes des billes voisines à la bille principale ou voir si il y a des doublons
                for(var ind = 0; ind < NbPlusGrandeExploiration; ind++)
                {
                    if(voisin1.indexOf(voisin2[ind]) != -1) // Si une bille est commune au 2 voisinage
                    {
                        if(voisin2[ind] != (position+":"+plateau[x][y]))
                        {
                            console.log("--------VOSIIN:("+voisin2[ind]+")    POSI:("+position+":"+plateau[x][y]+")");
                            nbBilleEnCommun++;
                            console.log("Bille commun" + voisin2[ind]);
                        }
                    }
                }

                if(nbBilleEnCommun == 0)
                {
                    EstBillePillier = true;
                }


            }
            if(!EstBillePillier)// Dans les 2 voisinages, il faut a tout pris 2 billes en commun, seule que l'on souhaite
            // celle que l'on souhaite enlever et une autre. Sinon la bille est une bille pallier
            {

                if (plateau[x][y] != "o") {
                    if (joueur == 1)
                        joueur1 += plateau[x][y] + ";";

                    if (joueur == 2)
                        joueur2 += plateau[x][y] + ";";

                    retour = true;
                    AfficheJeu();
                    console.log("Le joueur " + joueur + " a enlever la bille " + plateau[x][y] + " de la case " + position);
                    plateau[x][y] = "o";
                    this.AfficheNbBilleJoueur(joueur);
                }
                else {
                    retour = false;
                    console.log("La case est déjà vide");

                }

            }else
            {
                retour = false;
                console.log("La bille ne peut pas etre enlevee, c'est une bille pillier");
            }
        }
        else
        {
            console.log("LA BILLE N'EST PAS LA LISTE DES BILLES DISPO");
        }
        return retour;
    };

    this.AfficheNbBilleJoueur = function(joueur) {

        var noir = 0;
        var vert = 0;
        var blanc = 0;
        var bleu = 0;
        var rouge = 0;
        var jaune = 0;

        var chaineNbBilleJoueur = "";

        if(joueur == 1)
            chaineNbBilleJoueur = joueur1.split(";");

        if(joueur == 2)
            chaineNbBilleJoueur = joueur2.split(";");

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
        console.log("Le joueur "+joueur+ " a  N:"+noir+" G:"+vert+" W:"+blanc+" B:"+bleu+" R:"+rouge+ " Y:"+jaune);
    };

    this.VerificationJoueurGagnant = function(joueur){
    };

    function AfficheJeu(){
        var ligne = "";
        for(var i = 0; i < 6 ; i++)
        {
            if(i==3)
                console.log(" ");
            for(var o = 0; o < 6 ; o++)
            {
                if(o == 3)
                    ligne = ligne +" ";
                ligne =  ligne + "["+plateau[o][i]+"]";
            }
            console.log(ligne);
            ligne = "";
        }
    };
};
