
var people = [{
"question":"Колко е населението на света според ООН за средата на 2015г?",
"answers":["А. 7,3 милиарда.","Б. 7,3 милиона.","В. 9 милиарда."],
"corect":"a"
},{
"question":"Кой от изброените езици се използва от най- много хора по света?",
"answers":["А. Английски.","Б. Китайски.","В. Руски."],
"corect":"b"
},{
"question":"През колко години се провеждат Олимпийските игри?",
"answers":["А.  Всяка година.","Б. 2 години.","В. 4 години."],
"corect":"v"
},{
"question":"Кога е отпечатан първият вариант на 'Книгата за рекорди на Гинес'?",
"answers":["А. септември 1954г.","Б. август 1954г.","В. май 1953г."],
"corect":"b"
},{
"question":"Кога официално е създадена Организацията на Обединените Нации?",
"answers":["А. 24 октомври, 1945г.","Б. 3 септември, 1902г.","В. 1 юни, 1922г."],
"corect":"a"
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
    arr[0].innerHTML = people[i].question;
    arr[1].innerHTML = people[i].answers[0];
    arr[2].innerHTML = people[i].answers[1];
    arr[3].innerHTML = people[i].answers[2];
	check = people[i].corect;
	
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
