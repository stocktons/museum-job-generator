import './App.css';
import Job from './Job.js';
import titleCard from './titleCard.jpg';

function App() {
  return (
    <div className="App">
      <img
        className="App-title-card"
        src={titleCard}
        alt="Drawing of an old-fashioned fancily-dressed man"
        />
      <h1>Museum Job Generator</h1>
      <hr></hr>
      < Job />
    </div>
  );
}

export default App;
