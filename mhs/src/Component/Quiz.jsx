import React, { useState } from "react";
import data from "../Data/data.json";
function Quiz() {
  let [idx, setidx] = useState(2);
  let [selected, setselected] = useState(-1);
  let [count, setcount] = useState(0);
  let [answers, setanswers] = useState();
  let [lock, setlock] = useState(true);
  let[store,setStore]=useState([])
  let [result,setResult]=useState([false])

  function next(e) {
    setlock(true)
    if (!lock) {
      if(idx+1==data.length){
        setResult(true)
        return 
      }
      setidx((prev) => prev + 1);
      setselected(-1);

    } else {
      alert("your option");
    }
  }

  function checkQue(e) {
    setlock(false)

    if (lock) {
      const i = Number(e.target.id);
      setselected(i);
      setStore([])
      if (data[idx].answer == i) {
        setcount((prev) => prev + 1);
        console.log(count);
      }
    }
  }
  setInterval(()=>{

  },)
  

  return (
    <>
      <div className="main">
        <div className="quizmain">
          <h1>Quiz App</h1>
          <hr />
          { result==true?<></>:<>
          
          <h2>
            {idx + 1} {data[idx].question}
          </h2>
          <div onClick={checkQue} className={selected != -1&& "selected"}>
            {data[idx].options.map((o, i) => (
              <p
                key={i}
                id={i}
                className={`${
                  (selected == data[idx].answer && selected == i) ||
                  (selected != data[idx].answer && i == data[idx].answer)
                    ? "correct"
                    : ""
                }  ${
                  selected == i && selected != data[idx].answer && "incorrect"
                }`}
              >
                {o}
              </p>
            ))}
          </div>
          <div className="quitbtns">
            <button onClick={() => setidx((prev) => prev - 1)}>Back</button>
            <button onClick={() =>{
               setidx((prev) => prev + 1)
               setselected(-1)
            }}>Skip</button>
            <button onClick={next}> Next</button>
          </div>
          <div className="index">{idx+1} of {data.length} question</div>
          </>
}
{
  result==true?<h2> Your Score  {count}out of{data.length}</h2>:<></>
}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Quiz;
