function setDate() {
  const now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  let secDegree = sec*6;
  let minDegree = min*6;
  let hourDegree = 30*hour + min/2;

  document.querySelector('.hour-hand').style.transform = `rotate(${hourDegree+ 90}deg)`;
  document.querySelector('.min-hand').style.transform =  `rotate(${minDegree + 90}deg)`;
  document.querySelector('.sec-hand').style.transform =  `rotate(${secDegree + 90}deg)`;

  let label = hour >= 12 ? "PM" : "AM"; /**to give label */

  hour = hour > 12 ? `${hour - 12}` : hour; /**if it is 13-1 = 1 pm */

  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  /**if digit is one digited then attach 0 before the  number */
  console.log(hour + ":" + min + ":" + sec + " " +label);
  
  let clock = document.getElementById('digital')
  clock.innerHTML = `${hour}:${min}:${sec} ${label}`
}

setInterval(setDate, 1000);


/** 
 * 360 deg = 12 hour
 * 30 deg = 1 hour + 0.5 min
 * 
 * 30 deg = 60 min 
 * 0.5 deg = 1 min
 * 
 * 360 deg = 60sec 
 * 6 deg = 1 sec
 */