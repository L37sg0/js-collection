
var countries = [{
"question":"Колко са международно признатите суверенни държави в света?",
"answers":["А. 194.","Б. 205.","В. 179."],
"corect":"a"
},{
"question":"Къде се намира България?",
"answers":["А. На Апенинския полуостров.","Б. На Балканския полуостров.","В. В Южна Азия."],
"corect":"b"
},{
"question":"Коя от изброените държави заема най- голяма територия?",
"answers":["А. Китай.","Б. САЩ.","В. Канада."],
"corect":"b"
},{
"question":"С кои държави граничи България?",
"answers":["А. Румъния, Сърбия, Македония, Гърция, Турция","Б. Румъния, Сърбия, Унгария, Гърция, Албания","В. Русия, Сърбия, Македония, Грузия, Турция"],
"corect":"a"
},{
"question":"Коя е столицата на България?",
"answers":["А. Варна.","Б. София.","В. Бургас."],
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
    arr[0].innerHTML = countries[i].question;
    arr[1].innerHTML = countries[i].answers[0];
    arr[2].innerHTML = countries[i].answers[1];
    arr[3].innerHTML = countries[i].answers[2];
	check = countries[i].corect;
	
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
