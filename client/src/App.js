import React from 'react';
import './App.css';
import john from './john.gif';
import pumpkinDance from './giphy.gif';
import fresh from './fresh.gif';
import dancing_ki from './dancing_ki.gif';
import baby from './dancingbaby.gif';
import dollar from './dollarspindownd.gif';
import QuestionCard from './QuestionCard';
import Quiz from './Quiz';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Wackiest Quiz!
        </p>
      </header>
      <body>
        <div class="row">
          <div class="col-3">
            <img src={john} vspace="30" class="img-fluid"/>
            <img src={fresh} vspace="40" class="img-fluid"/>
            <div></div>
            <img src={dollar} vspace="40" class="img-fluid"/>
          </div>
          <div class="col-6"><Quiz/></div>
          <div class="col-3">
            <img src={pumpkinDance} vspace="30" class="img-fluid"/>
            <img src={dancing_ki} vspace="40" class="img-fluid"/>
            <img src={baby} vspace="40" class="img-fluid"/>
          </div>

          
          <div>
            <p>IF YOU WANT TO KNOW MORE ABOUT THESE PEOPLE: https://and.digital/about/people/ </p>
          </div>
          
        </div>
      </body>
    </div>
  );
}

export default App;
