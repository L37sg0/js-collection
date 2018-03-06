var space = [{
"question":"Как се нарича системата в която се намира нашата планета?",
"answers":["А. Слънчева система.","Б. Звънчева система.","В. Млечен път."],
"corect":"a"
},{
"question":"В коя галактика се намира нашата планета?",
"answers":["А. Андромеда.","Б. Млечен път.","В. К1589C."],
"corect":"b"
},{
"question":"Колко планети има в Слънчевата система?",
"answers":["А. 9.","Б. 13.","В. 5."],
"corect":"a"
},{
"question":"Какъв обект е Слънцето?",
"answers":["А. Звезда.","Б. Астероид.","В. Планета."],
"corect":"a"
},{
"question":"Как са подредени планетите в Слънчевата система?",
"answers":["А. Меркурий, Венера, Земя, Юпитер, Нептун, Луна, Марс, Плутон, Сатурн.","Б. Земя, Луна, Юпитер, Нептун, Плутон, Венера, Меркурий, Уран, Марс.","В. Меркурий, Венера, Земя, Марс, Юпитер, Сатурн, Уран, Нептун, Плутон."],
"corect":"v"
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
    arr[0].innerHTML = space[i].question;
    arr[1].innerHTML = space[i].answers[0];
    arr[2].innerHTML = space[i].answers[1];
    arr[3].innerHTML = space[i].answers[2];
	check = space[i].corect;
	
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
