function loginAdmin(){

let password =
document.getElementById("adminPassword").value;

let panel =
document.getElementById("adminPanel");

if(password.trim() === "1234"){

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

alert("Вы вышли из админки");

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

document
.getElementById("newsInput")
.value = "";

saveNews();

}

}

function saveNews(){

localStorage.setItem(
"newsData",
document
.getElementById("newsList")
.innerHTML
);

}

function loadNews(){

let saved =
localStorage.getItem("newsData");

if(saved){

document
.getElementById("newsList")
.innerHTML = saved;

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

alert("Расписание сохранено 📚");

}

function loadSchedule(){

let saved =
localStorage.getItem(
"scheduleData"
);

if(saved){

document
.getElementById("scheduleText")
.innerHTML =
saved.replace(/\n/g,"<br>");

document
.getElementById("scheduleInput")
.value = saved;

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

document
.getElementById("studentName")
.value = "";

document
.getElementById("studentGrade")
.value = "";

saveGrades();

}

}

function saveGrades(){

localStorage.setItem(
"gradesData",
document
.getElementById("gradesList")
.innerHTML
);

}

function loadGrades(){

let saved =
localStorage.getItem(
"gradesData"
);

if(saved){

document
.getElementById("gradesList")
.innerHTML = saved;

}

}

function askAI(){

let text =
document.getElementById("aiInput")
.value.toLowerCase();

let response = "";

if(text.includes("привет")){

response =
"Привет 😎";

}else if(text.includes("расписание")){

response =
"Смотри раздел расписания 📚";

}else if(text.includes("дз")){

response =
"Домашнее задание есть в разделе 📚";

}else if(text.includes("каникулы")){

response =
"Скоро каникулы 🚀";

}else if(text.includes("оценки")){

response =
"Смотри раздел оценок 📊";

}else{

response =
"Я пока не знаю ответ 😅";

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

function loadNote(){

let saved =
localStorage.getItem(
"savedNote"
);

if(saved){

document
.getElementById("savedNote")
.innerText = saved;

document
.getElementById("noteInput")
.value = saved;

}

}

function toggleTheme(){

document.body.classList.toggle("light");

localStorage.setItem(
"theme",
document.body.classList.contains("light")
? "light"
: "dark"
);

}

function loadTheme(){

let theme =
localStorage.getItem("theme");

if(theme === "light"){

document.body.classList.add("light");

}

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

saveGallery();

}

reader.readAsDataURL(file);

}

});

function saveGallery(){

localStorage.setItem(
"galleryData",
document
.getElementById("realGallery")
.innerHTML
);

}

function loadGallery(){

let saved =
localStorage.getItem(
"galleryData"
);

if(saved){

document
.getElementById("realGallery")
.innerHTML = saved;

}

}

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

loadNews();

loadSchedule();

loadGrades();

loadNote();

loadGallery();

loadTheme();

}
