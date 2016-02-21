/**** Déclarations des variables et tableaux ****/
var m = 50, n = 50; 
var A, B, C ,D, glider, puffeur, HWSS, lapin, hamecon, fusee;
var post = "";
var turn = 0;
var go = 0;
var vitesse = 0;
var tid = 0;
var verif = 0;

// Variables achievements
var ach_lifeOn = ach_undead = ach_special = ach_click = ach_sl = ach_clear = ach_speed = ach_mille = false;
var reach_a = reach_b = reach_c = reach_d = reach_e = reach_f = reach_g = reach_h = 0;


function reset() {/// réserve la mémoire pour l'état passé en paramètre et initialise ses cellules à 'dead'
	var state = new Array(m);
	var i, j;
	for (i = 0; i <= m; i++) {
		state[i] = new Array(n);
		for (j = 0; j <= n; j++) state[i][j] = false;
	}
	return state;
}
/**** Pack de fonctions travaillant ensemble afin de remettre à zéro les valeurs selon les conditions ****/
function print(A){
    document.getElementById('tours').innerHTML = "Tours : " + turn;
    afficher(A);
    afficherVitesse();
    var opt = document.getElementById("indication"); 
    opt.className= "show"; 
}

function clearTab(parametres){
    m = document.parametres.y.value;
    n = document.parametres.x.value;
    A = reset();
    B = reset();
    D = reset();
    turn = 0;
    print(A);
    ach_clear = true;
    check();
}

function start(parametres){
    m = document.parametres.y.value;
    n = document.parametres.x.value;
    if(m>80){
        m=80;
    }
    if(n>80){
        n=80;
    }
    A = reset();
    B = reset();
    C = reset();
    D = reset();
    glider = reset();
    puffeur = reset();
    HWSS = reset();
    lapin = reset();
    hamecon = reset();
    fusee = reset();
    turn = 0;
    print(A);
}
/**** Déclarations des variables et tableaux ****/
function random(state) {/// Insère dans le tableau des valeurs aléatoires
	var i, j;
	for (i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
			state[i][j] = (Math.floor(Math.random() * 4) == 0);
		}
	}
    afficher(A);
}
function Click(x,y) { // inverser la valeur de la case
    if(A[x][y]==false)
    {
        A[x][y] = true;
    }
    else{
        A[x][y] = false;
    }
    afficher(A);
    ach_click = true;
}
function afficher(state) {/// affiche l'état courant (On efface et on retrace le tableau)
	var i, j;
    undead(C,B);
    post = "<table id='Life' width='"+(890)+"' height='"+(830)+"' cellspacing='0'>";
	for (i = 0; i < m; i++) {
		post += "<tr>";
		for (j = 0; j < n; j++) {
			if (state[i][j]) post += "<td onclick='Click("+i+","+j+")' id='living'></td>";
            else if(state[i][j]==false && D[i][j]==true){ post += "<td onclick='Click("+i+","+j+")' id='undead'></td>";ach_undead = true;}
			else post += "<td onclick='Click("+i+","+j+")' id='dead'></td>";
		}
		post += "</tr>";
        
	}
    post += "</table>";
    document.getElementById('Life').innerHTML = post;
    check();
}
function next(A, B) {/// copie un état (du tableau courant A vers le suivant B)
	var i, j;
	for (i = 0; i < m; i++) {
		for (j = 0; j < n; j++) A[i][j] = B[i][j];
	}	
}
function undead(C, B) {/// Ajoute dans un tableau une sauvegarde des cellule ayant un jour été vivante
	var i, j;
	for (i = 0; i < m; i++) {
		for (j = 0; j < n; j++){
            if(B[i][j]==true) D[i][j] = B[i][j];
        }
	}
}
function generate(A, B) {/// calcule le nouvel état B à partir du précédent A
	var i, j,k;
	for (i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
            k = 0;
			if (i > 0)          if (A[i - 1][j]) k++;
			if (i > 0 && j > 0) if (A[i - 1][j - 1]) k++;
			if (i > 0 && j < n) if (A[i - 1][j + 1]) k++;
			if (i < m)          if (A[i + 1][j]) k++;
			if (i < m && j > 0) if (A[i + 1][j - 1]) k++;
			if (i < m && j < n) if (A[i + 1][j + 1]) k++;
			if (j > 0) if (A[i][j - 1]) k++;
			if (j < n) if (A[i][j + 1]) k++;
			if (k == 3 || (k == 2 && A[i][j])) B[i][j] = true;
            else{
                B[i][j] = false;
            }
		}
	}
    turn++;
    ach_lifeOn = true;
    document.getElementById('tours').innerHTML = "Tours : " + turn;
    afficher(B);
    next(A,B);
    check();
    if (turn > 1000){
        ach_mille = true;
    }
    
}
/********** Fonction avance rapide/ralentissement **************/
function tourner(){ //Boucle
        generate(A,B);
        tid = setTimeout(tourner, 200);
    }
function run(){//Accelerer
    lifeOn = true;
    vitesse++;
    afficherVitesse();
    tourner();
}
function stop(){//Ralentir
    clearTimeout(tid);
    vitesse--;
    afficherVitesse();
}
function afficherVitesse(){ // Affiche la vitesse actuelle
    if(vitesse<0)
    {
        vitesse = 0;
    }
    if(vitesse>10){
        ach_speed = true;
    }
    document.getElementById('vitesse').innerHTML = "x" + vitesse;
}



/********** Fonction sauvegarde/Charge **************/
function save(C, A){
    next(C, A);
    verif++;
    NvSauv();
}
function load(C){
    var i,j;
    if(verif != 0){
        next(A, C);
        afficher(A);
    }
    else{
        
    }
    ach_sl = true;
    check();
}
