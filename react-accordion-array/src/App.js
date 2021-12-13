
import React from "react";
import { useState } from "react";
import data from './data';
import Accordion from "./Accordion";
const App = () => {
  //Lets use state.
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
      <h3>Question and answer about Login</h3>
      <section className="info">
      {questions.map((question) =>{
        return <Accordion key={question.id}{...question} />
      })}
      </section>
      </div>
          </main>
  );
}

export default App;
