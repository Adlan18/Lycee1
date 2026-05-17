function loginAdmin(){

let password =
document.getElementById("adminPassword").value;

let panel =
document.getElementById("adminPanel");

if(password.trim() === "185673"){

panel.style.display = "block";

localStorage.setItem(
"adminLogged",
"true"
);

alert("Админ панель открыта 😎");

}else{

panel.style.display = "none";

alert("Неверный пароль ❌");

}

}

function logoutAdmin(){

document
.getElementById("adminPanel")
.style.display = "none";

localStorage.removeItem(
"adminLogged"
);

}

function addNews(){

let text =
document.getElementById("newsInput").value;

if(text.trim() !== ""){

let div =
document.createElement("div");

div.classList.add("message");

div.innerText = text;

document
.getElementById("newsList")
.appendChild(div);

localStorage.setItem(
"newsData",
document
.getElementById("newsList")
.innerHTML
);

}

}

function changeSchedule(){

let text =
document.getElementById("scheduleInput").value;

document
.getElementById("scheduleText")
.innerHTML =
text.replace(/\n/g,"<br>");

localStorage.setItem(
"scheduleData",
text
);

}

function addHomework(){

let text =
document.getElementById(
"homeworkInput"
).value;

if(text.trim() !== ""){

let div =
document.createElement("div");

div.classList.add("message");

div.innerText = text;

document
.getElementById("homeworkList")
.appendChild(div);

localStorage.setItem(
"homeworkData",
document
.getElementById("homeworkList")
.innerHTML
);

}

}

function addGrade(){

let name =
document.getElementById("studentName").value;

let grade =
document.getElementById("studentGrade").value;

if(name.trim() !== "" &&
grade.trim() !== ""){

let div =
document.createElement("div");

div.classList.add("message");

div.innerHTML =
name + " — " + grade + " ⭐";

document
.getElementById("gradesList")
.appendChild(div);

localStorage.setItem(
"gradesData",
document
.getElementById("gradesList")
.innerHTML
);

}

}

function addTopStudent(){

let text =
document.getElementById(
"topInput"
).value;

if(text.trim() !== ""){

let div =
document.createElement("div");

div.classList.add("message");

div.innerText = text;

document
.getElementById("topStudents")
.appendChild(div);

localStorage.setItem(
"topData",
document
.getElementById("topStudents")
.innerHTML
);

}

}

function addNotification(){

let text =
document.getElementById(
"notificationInput"
).value;

if(text.trim() !== ""){

let div =
document.createElement("div");

div.classList.add("message");

div.innerText = text;

document
.getElementById("notifications")
.appendChild(div);

localStorage.setItem(
"notificationData",
document
.getElementById("notifications")
.innerHTML
);

}

}

function askAI(){

let text =
document.getElementById("aiInput")
.value.toLowerCase();

let response = "";

if(text.includes("привет")){

response = "Привет 😎";

}else if(text.includes("расписание")){

response = "Смотри расписание 📚";

}else if(text.includes("дз")){

response = "Домашнее задание есть 📖";

}else if(text.includes("каникулы")){

response = "Скоро каникулы 🚀";

}else{

response = "Я пока не знаю 😅";

}

document
.getElementById("aiResponse")
.innerText = response;

}

function saveNote(){

let note =
document.getElementById("noteInput").value;

document
.getElementById("savedNote")
.innerText = note;

localStorage.setItem(
"savedNote",
note
);

}

function toggleTheme(){

document.body.classList.toggle("light");

}

document
.getElementById("uploadPhoto")
.addEventListener("change",function(event){

let file =
event.target.files[0];

if(file){

let reader =
new FileReader();

reader.onload = function(e){

let img =
document.createElement("img");

img.src = e.target.result;

document
.getElementById("realGallery")
.appendChild(img);

}

reader.readAsDataURL(file);

}

});

for(let i=0;i<120;i++){

let star =
document.createElement("div");

star.classList.add("star");

star.style.left =
Math.random()*100+"%";

star.style.top =
Math.random()*100+"%";

star.style.animationDuration =
20 + Math.random()*80 + "s";

document
.querySelector(".stars")
.appendChild(star);

}

window.onload = function(){

if(
localStorage.getItem("adminLogged")
=== "true"
){

document
.getElementById("adminPanel")
.style.display = "block";

}

let news =
localStorage.getItem("newsData");

if(news){

document
.getElementById("newsList")
.innerHTML = news;

}

let schedule =
localStorage.getItem(
"scheduleData"
);

if(schedule){

document
.getElementById("scheduleText")
.innerHTML =
schedule.replace(/\n/g,"<br>");

}

let homework =
localStorage.getItem(
"homeworkData"
);

if(homework){

document
.getElementById("homeworkList")
.innerHTML = homework;

}

let grades =
localStorage.getItem(
"gradesData"
);

if(grades){

document
.getElementById("gradesList")
.innerHTML = grades;

}

let top =
localStorage.getItem(
"topData"
);

if(top){

document
.getElementById("topStudents")
.innerHTML = top;

}

let notifications =
localStorage.getItem(
"notificationData"
);

if(notifications){

document
.getElementById("notifications")
.innerHTML = notifications;

}

let note =
localStorage.getItem(
"savedNote"
);

if(note){

document
.getElementById("savedNote")
.innerText = note;

}

}
