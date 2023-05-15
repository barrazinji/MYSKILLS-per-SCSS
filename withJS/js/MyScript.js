var allSkills = ["HTML", "CSS", "SCSS", "JS", "Json", "jQuery", "PHP", "MySql", "Laravel"];
var oldSkills = ["csharp", "ASPNet", "WPF", "oop", "IIS", "Xampp", "ADO", "VBA", "GIT"];
var farben = ["#808000", "#ff6600", "#916f8a", "#008000", "#8d8d8d", "#0055d4", "#406194", "#0055d4", "#ff0000", "#ff0000", "#0055d4", "#406194", "#0055d4", "#4d4d4d", "#008000", "#916f8a", "#ff6600", "#808000"];


var i = 0;
var tmp = "";

allSkills.forEach(element => {
    var zusammen = document.createElement("div");
    zusammen.className = element + " platz" + tmp;
    zusammen.setAttribute("style", "display: inline-block; width:180px; height:180px; left:50%; top:50%; position:absolute; ");


    var viereck = document.createElement("div");
    viereck.setAttribute("style", "display: inline-block; width:90px; height:90px; right:0%; top:50%; position:absolute; background-color: " + farben[i] + ";");



    var skill = document.createElement("div");
    skill.className = "   rund";
    skill.setAttribute("style", "display: inline-block; width:180px; height:180px; background-color: " + farben[i++] + ";");


    var inhalt = document.createElement("span");
    inhalt.innerText = element;

    inhalt.className = "derSpan";



    skill.appendChild(inhalt);

    let allMySkills = document.getElementById("allMySkills");

    zusammen.appendChild(viereck);


    zusammen.appendChild(skill);
    allMySkills.appendChild(zusammen);



});



tmp = " temp";
oldSkills.forEach(element => {
    var zusammen = document.createElement("div");
    zusammen.className = element + " platz" + tmp;
    zusammen.setAttribute("style", "display: inline-block; width:180px; height:180px; position:absolute; ");


    var viereck = document.createElement("div");
    viereck.setAttribute("style", "display: inline-block; width:90px; height:90px; right:0%; top:50%; position:absolute; background-color: " + farben[i] + ";");



    var skill = document.createElement("div");
    skill.className = "   rund";
    skill.setAttribute("style", "display: inline-block; width:180px; height:180px; background-color: " + farben[i++] + ";");


    var inhalt = document.createElement("span");
    inhalt.innerText = element;

    inhalt.className = "derSpan";



    skill.appendChild(inhalt);

    let allMySkills = document.getElementById("allMySkills");

    zusammen.appendChild(viereck);


    zusammen.appendChild(skill);
    allMySkills.appendChild(zusammen);



});