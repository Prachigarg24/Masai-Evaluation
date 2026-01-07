import {useEffect, useState} from "react";
function Timer(){
  const [time, setTime] = useState(300); // default time start at 5 mins
  const [running, setRunning] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  useEffect(()=> {
    let id;
    if(running && time > 0) {
      id = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000)
    }
    return() => clearInterval(id);

  }, [running, time]);
  if(time === 0 && running){
    setRunning(false);
  }
  const minutes= Math.floor(time / 60);
  const seconds = time % 60;

  const displayMin = minutes < 10 ? "0" + minutes : minutes;
  const displaySec = seconds < 10 ? "0" + seconds : seconds;
  return(
    <div style={{ textAlign: "center"}}>
      {!edit ? (
        <h2 onClick={() => {
          setRunning(false);
          setEdit(true)
        }}
        style={{color: time === 0 ? "red" : "black", cursor:"pointer"}}
        >
          {displayMin}:{displaySec}

        </h2>
      ) : (
      <input 
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        setTime(Number(value));
        setEdit(false);
      }}
      />
     
      
      )}
      <button onClick={() => time > 0 && setRunning(!running)}>{running ? "Stop"  :  "Start"}</button>
      <button onClick={() =>{
        setRunning(false);
        setTime(300)
      }}
      >Reset
      </button>
{time === 0 && <p>Time Over</p>}
    </div>
  )
}
export default Timer