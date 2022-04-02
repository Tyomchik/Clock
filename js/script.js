let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');

    
// new Date() - глобальный объект который отдает время и дату из вашего компа   
    
function clock() {
    let time = new Date();
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    
    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;
    
    hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    
    
    setTimeout(() => clock(),1000);
    
}
clock()



// рекурсия это когда функция вызывает саму себя


// let i  = 0;

// function rek() {
//     console.log(i);
//     if(i < 100) {
//         i++
//         setTimeout(() => rek(), 1000);
//     }
// }
// rek()




let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    

for(let i = 0; i < links.length;i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault()
        for(let x = 0; x < links.length;x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        links[i].classList.add('active');
        tabs[i].classList.add('active');
    })
}