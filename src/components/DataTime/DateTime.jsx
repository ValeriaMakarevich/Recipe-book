import { useEffect, useState } from "react";
import "./DateTime.css";


function DateTime() {
  const [time, setTime] = useState('');
  const [day, setDay] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
    const date = new Date()

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const month =  date.getMonth() + 1
    const day = date.getDate();
    const year = date.getFullYear(); 

 const timeString = `${hours} : ${minutes < 10 ? ('0' + minutes) : minutes} : ${seconds}`;
 const dateString = `${day} / ${month < 10 ? ('0' + month) : month} / ${year}`

 setTime(timeString)
setDay(dateString)
}, 100)
    
    return () => clearInterval(interval);
  }, []);

 
  


  return (
    <>
      <div className="watch">Время сейчас: {time}</div>
      <div className="date"> Дата: {day }</div>
    </>
  );
}

export default DateTime;
