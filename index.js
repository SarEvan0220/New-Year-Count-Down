const days= document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds =document.getElementById('seconds');
const year =document.getElementById('year');
const countdown=document.getElementById('countdown');

const currentYear=new Date().getFullYear();//2024
const nextYear = currentYear+1;//2025
let newYearTime=new Date(`January 01 2025 00:00:00`);

function update()
{
    let currentTime=new Date();//9th May 2024 1.37pm
    let diff = newYearTime - currentTime;//diff:4356789
    
    let d= Math.floor(diff/1000/60/60/24);
    let h= Math.floor(diff/1000/60/60)%24;
    let m= Math.floor(diff/1000/60)%60;
    let s= Math.floor(diff/1000)%60;

    days.innerHTML=d;
    hours.innerHTML=h < 100 ? "0"+h : h;
    minutes.innerHTML=m < 100? "0"+m : m;
    seconds.innerHTML=s < 100 ? "0"+s : s;
   


}

setInterval(update,1000)//1000millisecond=1sec