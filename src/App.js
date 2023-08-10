import React, {useState} from "react";
import './App.css';
import data from "./data";

function App() {

  const [holidays, setHolidays] = useState(data); 

  function deleteHoliday(id) {
    const newArr = holidays.filter(holiday => holiday.id !== id);
    setHolidays(newArr);
  }

  return (
    <main>
      <section className="container">
        <h3>National Holiday Dates</h3>
        {holidays.map((holiday) => {
          return(
            <div className="holiday" key={holiday.id}>
              <img src={holiday.img}/>
              <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p>
                <button className="clearBtn" onClick={() => deleteHoliday(holiday.id)}>Clear</button>
              </div>
            </div>
          )
        })}
        <button className="clearAllBtn" onClick={() => setHolidays([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
