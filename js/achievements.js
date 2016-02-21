// On vérifie si les achievements ont été atteints et on informe
function check(){
    if(ach_speed == true && reach_g == 0){
		var opt_speed = document.getElementById("Ach1"); 
        opt_speed.className= "show";
		reach_g++;
        document.getElementById('hoverSound').play();
        NvAchievement();
        
	}
    if(ach_undead == true && reach_b == 0){
		var opt_form = document.getElementById("Ach2"); 
        opt_form.className= "show";
		reach_b++;
        document.getElementById('hoverSound').play();
        NvAchievement();
	}
    if(ach_sl == true && reach_e == 0){
		var opt_sl = document.getElementById("Ach3"); 
        opt_sl.className= "show";
		reach_e++;
        document.getElementById('hoverSound').play();
        NvAchievement();
	}
	if(ach_lifeOn == true && reach_a == 0){
		var opt_lifeOn = document.getElementById("Ach4"); 
        opt_lifeOn.className= "show";
		reach_a++;
        document.getElementById('hoverSound').play();
        NvAchievement();
	}
	
	if(ach_special == true && reach_c == 0){
		var opt_special = document.getElementById("Ach5"); 
        opt_special.className= "show";
		reach_c++;
        document.getElementById('hoverSound').play();
        NvAchievement();
	}
    if(ach_clear == true && reach_f == 0){
		var opt_clear = document.getElementById("Ach6"); 
        opt_clear.className= "show";
		reach_f++;
        document.getElementById('hoverSound').play();
        NvAchievement();
	}
	if(ach_click == true && reach_d == 0){
		var opt_click = document.getElementById("Ach7"); 
        opt_click.className= "show";
		reach_d++;
        document.getElementById('hoverSound').play();
        NvAchievement();
	}
	if(ach_mille == true && reach_h == 0){
		var opt_mille = document.getElementById("Ach8"); 
        opt_mille.className= "show";
		reach_h++;
        document.getElementById('hoverSound').play();
        NvAchievement();
	}
}