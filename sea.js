
var sea = [{
"question":"На колко района най- често се разделя Световния океан?",
"answers":["А. 3.","Б. 5.","В. 7."],
"corect":"b"
},{
"question":"Кое е най- голямото море на Земята?",
"answers":["А. Филипинско море.","Б. Адриатическо море.","В. Черно море."],
"corect":"a"
},{
"question":"Кое е най-соленото море на Земята?",
"answers":["А. Червено море.","Б. Черно море.","В. Мъртво море."],
"corect":"v"
},{
"question":"Как се нарича пространството в което е разположена водата на Земята?",
"answers":["А. Биосфера.","Б. Атмосфера.","В. Хидросфера."],
"corect":"v"
},{
"question":"Каква е средната дълбочина на Черно море?",
"answers":["А. 2000м.","Б. 1253м.","В. 3542.4м."],
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
    arr[0].innerHTML = sea[i].question;
    arr[1].innerHTML = sea[i].answers[0];
    arr[2].innerHTML = sea[i].answers[1];
    arr[3].innerHTML = sea[i].answers[2];
	check = sea[i].corect;
	
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
