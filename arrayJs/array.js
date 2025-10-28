const songs = ["Dynamite – Taio Cruz" , " Atemlos – Helene Fischer" , " Birds of a feather – Billie Eilish", " Say – Keshi", " Looks could kill – Chrissie Constanza",
" Man – Taylor Swift"];

const cats = [1,2,3,4,5,6,7,8,9,10];

document.getElementById("playList").innerHTML = songs;

let text =" ";
let ranking;

for (let i = 0; i <cats.length; i++){
    ranking = i+1;
    text += "<span class='songRanked'>"+ ranking +") The best song goes to " + cats[i] + "</spans><br/>";
}

document.getElementById("playList2").innerHTML = text;