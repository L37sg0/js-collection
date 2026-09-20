
var animals = [{
"question":"В коя книга са описани изчезващите и застрашени животински видове на територията на България?",
"answers":["А. Черна книга.","Б. Зелена книга.","В. Червена книга."],
"corect":"v"
},{
"question":"Кой е най- висшият клас гръбначни животни?",
"answers":["А. Хора.","Б. Примати.","В. Бозайници."],
"corect":"v"
},{
"question":"Как се разделят животните според хранителните си предпочитания?",
"answers":["А. Хищници, Растителноядни, Всеядни.","Б. Месоядци, Мравояди, Ряпояди.","В. Хищници, Рищници, Гъбоядни."],
"corect":"a"
},{
"question":"Къде се среща най- голямото животно в света?",
"answers":["А. В океана.","Б. На сушата.","В. Във въздуха."],
"corect":"a"
},{
"question":"Кое е второто по големина животно в света?",
"answers":["А. Син Кит.","Б. Финвал.","В. Гигантски Калмар."],
"corect":"b"
}];


var arr = document.getElementsByTagName("li");
i = 0;
scores = 0;

function start(){
	document.getElementById("scores").innerHTML = "Точки: " + scores;
	if(i == 5){
		i = 0;
		alert("Край!");
	}
    arr[0].innerHTML = animals[i].question;
    arr[1].innerHTML = animals[i].answers[0];
    arr[2].innerHTML = animals[i].answers[1];
    arr[3].innerHTML = animals[i].answers[2];
	check = animals[i].corect;
	
}
function setQ(click){
	if(check == click){
		alert("Вярно!");
		scores += 1;
		i += 1;
		start();
	}
	else{
		alert("Грешно!");
		i += 1;
		start();
	}
}

start();
