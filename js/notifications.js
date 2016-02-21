function NvAchievement(){
    var opt = document.getElementById("notif"); 
    opt.className= "show";
    setTimeout("closeAch()",3000);
}
function NvSauv(){
    var opt = document.getElementById("notif2"); 
    opt.className= "show";
    setTimeout("closeSauv()",3000);
}
function closeAch(){
    var opt = document.getElementById("notif"); 
    opt.className= "hide";
}
function closeSauv(){
    var opt = document.getElementById("notif2"); 
    opt.className= "hide";
}