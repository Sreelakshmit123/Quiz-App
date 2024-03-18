
import React, {  useRef, useState } from 'react'
import {Button} from 'react-bootstrap'
import {data} from '../assets/data'
import './Quiz.css';
function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionArray = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
      if (!lock) {
          if (question.ans === ans) {
              e.target.classList.add("correct");
              setLock(true);
              setScore(prev => prev + 1);
          } else {
              e.target.classList.add("wrong");
              setLock(true);
              optionArray[question.ans - 1].current.classList.add("correct");
          }
      }
  };

  const next = () => {
      if (lock === true) {
          if (index === data.length - 1) {
              setResult(true);
              return;
          }
          setIndex(prevIndex => prevIndex + 1); // Increment index properly
          setQuestion(data[index + 1]); // Changed to use updated index
          setLock(false);
          optionArray.forEach(option => {
              option.current.classList.remove("wrong");
              option.current.classList.remove("correct");
          });
      }
  };

  const resetQuiz = () => {
      setIndex(0);
      setQuestion(data[0]);
      setLock(false);
      setScore(0);
      setResult(false);
  };
  return ( 
  
  <>
 
 {result ? (
  
                <div  className='container bg-white text-black mt-5 pe-4 ps-4'style={{width:'500px'}}>
                           <h1 style={{height:'50px'}} className='text-center'>Quiz App</h1>
<hr />
                  <h1 style={{height:'50px'}} className='text-center'>Result</h1>
                  <h3 style={{height:'50px'}} className='text-center'>Total Questions: 10</h3>
                    <h2 style={{height:'50px'}} className='text-center'>You Scored <span className='text-info ' style={{fontSize:'40px'}}>{score}/10</span></h2>

                    <Button  className='btn mb-2 text-center' style={{width:'200px ',height:'50px', marginLeft:'105px'}} onClick={resetQuiz}><b>Play Again</b></Button>
                </div>
            ) : (
      <div className='container bg-white text-black mt-4 pe-4 ps-4'style={{width:'800px'}} >
         <h1 style={{height:'50px'}} className='text-center'>Quiz App</h1>
         <hr />
         
         <h2 style={{height:'78px'}}>{index+1}.{question.question}</h2> 
            
                <li ref={Option1} onClick={(e)=>(checkAns(e,1))} style={{cursor:'pointer'}} className='border rounded border-primary mb-2 p-1'> {question.option1}</li>
                <li ref={Option2} onClick={(e)=>(checkAns(e,2))} style={{cursor:'pointer'}} className='border rounded  border-primary mb-2  p-1'>  {question.option2}</li>
                <li ref={Option3}  onClick={(e)=>(checkAns(e,3))}style={{cursor:'pointer'}} className='border rounded  border-primary mb-2  p-1'>  {question.option3}</li>
                <li ref={Option4} onClick={(e)=>(checkAns(e,4))} style={{cursor:'pointer'}} className='border  rounded border-primary mb-2  p-1'>  {question.option4}</li>
       
         <Button onClick={next} className='btn mb-2' style={{width:'95px ',height:'50px',float:'right'}}><b>Next</b></Button>
         <br />
         <br />
         <br />
         
         <div className='index mb-3 fs-5 text-center'>{index + 1}  of 10 questions</div>
     
        </div>
         )} 
  </> 
  
  )
}

export default Quiz
