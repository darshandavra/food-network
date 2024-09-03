

let baricon = document.getElementById("bar");
let ul = document.querySelector("ul");

baricon.addEventListener("click", function() {
    ul.classList.toggle("showtime");
    if (ul.classList.contains("showtime")) {
        baricon.className = "fa-solid fa-xmark";
    } else {
        baricon.className = "fa-solid fa-bars";
    }
});

let savetheme = localStorage.getItem('theme') || 'light';
document.body.className = savetheme;

const togglelight = document.getElementById('togglelight');
const toggledark = document.getElementById('toggledark');

togglelight.addEventListener('click',function(){
    document.body.className = 'light';
    localStorage.setItem('theme','light');
    togglelight.classList.add('active');
    toggledark.classList.remove('active');
});

toggledark.addEventListener('click',function(){
    document.body.className = 'dark';
    localStorage.setItem('theme','dark');
    toggledark.classList.add('active');
    togglelight.classList.remove('active');
});

if(savetheme==='light')
    togglelight.classList.add('active');

else{
    toggledark.classList.add('active');
}
// ------------------------------------------------------------------------------------------------

