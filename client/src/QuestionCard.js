import React from 'react';


function QuestionCard(){

  function handleClick(){
    alert('yo');
  }


  return(
    <div>
    <label> Is it a sport</label>
    <button className="btn btn-success" onClick={handleClick}> Yes </button>
    <button className="btn btn-success" onClick={handleClick}> No </button>


    </div>
  );
}

export default QuestionCard;
