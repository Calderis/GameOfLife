/********** Fonction Formes prédéfinies ***************/

function glider_gun(glider, A){
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++){
            glider[5][2] = glider[5][3] = glider[6][2] = glider[6][3] = glider[5][12] = glider[6][12] = glider[7][12] = glider[8][13] = glider[4][13] = glider[3][14] = glider[3][15] = glider[9][14] = glider[9][15] = glider[6][16] = glider[8][17] = glider[4][17] = glider[5][18] = glider[6][18] = glider[7][18] = glider[6][19] = glider[5][22] = glider[4][22] = glider[3][22] = glider[5][23] = glider[4][23] = glider[3][23] = glider[2][24] = glider[6][24] = glider[2][26] = glider[1][26] = glider[6][26] = glider[7][26] = glider[3][36] = glider[3][37] = glider[4][37] = glider[4][36] = true;
        }
        next(A, glider);
        afficher(A);
    }
}

function puffeur_gun(puffeur, A){
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++){
            puffeur[2][5] = puffeur[2][6] = puffeur[2][7] = puffeur[2][8] = puffeur[3][4] = puffeur[3][8] = puffeur[4][8] = puffeur[5][7] = puffeur[5][4] = puffeur[8][5] = puffeur[9][6] = puffeur[10][6] = puffeur[11][6] = puffeur[11][5] = puffeur[12][4] = puffeur[16][5] = puffeur[16][6] = puffeur[16][7] = puffeur[16][8] = puffeur[17][4] = puffeur[17][8] = puffeur[18][8] = puffeur[19][4] = puffeur[19][7] = true;
        }
        next(A, puffeur);
        afficher(A);
    }
}

function vaisseau(HWSS, A){
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++){
            HWSS[15][5] = HWSS[17][5] = HWSS[18][6] = HWSS[18][7] = HWSS[14][7] = HWSS[14][8] = HWSS[15][10] = HWSS[18][8] = HWSS[18][9] = HWSS[18][10] = HWSS[18][11] = HWSS[17][11] = HWSS[16][11] = true;

        }
        next(A, HWSS);
        afficher(A);
    }
}

function les_lapins(lapin, A){
    for(i = 0; i < m; i++){
        for(j = 0; j < n; j++){
            lapin[15][14] = lapin[16][15] = lapin[17][15] = lapin[15][16] = lapin[14][18] = lapin[15][19] = lapin[16][19] = lapin[14][20] = lapin[17][21] = true;
        }
        next(A, lapin);
        afficher(A);
    }
}

function hamecon_onze(hamecon, A){
    for(i = 0; i < m; i++){
        for(j = 0; j < n; j++){
            hamecon[15][10] = hamecon[14][10] = hamecon[15][11] = hamecon[13][11] = hamecon[13][12] = hamecon[13][13] = hamecon[12][13] = hamecon[11][13] = hamecon[10][14] = hamecon[10][15] = hamecon[11][15] = true;
        }
        next(A, hamecon);
        afficher(A);
    }
}

function loading(loaging, A){
    for(i = 0; i < m; i++){
        for(j = 0; j < n; j++){
            hamecon[10][10] = hamecon[10][12] = hamecon[11][11] = hamecon[12][8] = hamecon[12][9] = hamecon[12][11] = hamecon[12][13] = hamecon[12][14] = hamecon[13][11] = hamecon[14][9] = hamecon[14][11] = hamecon[14][13] = hamecon[15][11] = true;
        }
        next(A, hamecon);
        afficher(A);
    }
}

function fusee_start(fusee, A){
    for(i = 0; i < m; i++){
        for(j = 0; j < n; j++){
            fusee[49][20] = fusee[49][22] = fusee[49][26] = fusee[49][28] = fusee[48][19] = fusee[47][19] = fusee[46][19] = fusee[45][19] = fusee[44][19] = fusee[43][19] = fusee[43][20] = fusee[43][21] = fusee[44][22] = fusee[46][23] = fusee[47][23] = fusee[46][25] = fusee[47][25] = fusee[44][26] = fusee[43][27] = fusee[43][28] = fusee[46][19] = fusee[48][29] = fusee[47][29] = fusee[46][29] = fusee[45][29] = fusee[44][29] = fusee[43][29] = true;

        }
        next(A, fusee);
        afficher(A);
    }
}

/********** Fonction switch formes ***************/
var s = 1;
function switchFormes(){
    switch(s)
    {
    case 1:
        glider_gun(glider, A);
        s++;
        document.getElementById('formes').innerHTML = "Glider Gun";
        break;
    case 2:
        puffeur_gun(puffeur, A);
        s++;
        document.getElementById('formes').innerHTML = "Puffeur";
        break;
    case 3:
        vaisseau(HWSS, A);
        s++;
        document.getElementById('formes').innerHTML = "Vaisseau";
        break;
    case 4:
        les_lapins(lapin, A);
        s++;
        document.getElementById('formes').innerHTML = "Les Lapins";
        break;
    case 5:
        loading(loading, A);
        s++;
        document.getElementById('formes').innerHTML = "Loading";
        break;
    case 6:
        fusee_start(fusee, A);
        s=1;
        document.getElementById('formes').innerHTML = "Fusée";
        ach_special = true;
        check();
        break;
    default:
        document.getElementById('formes').innerHTML = "Erreur";
    }
}