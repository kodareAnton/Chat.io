import axios from 'axios';
import './App.css';

function App() {
  axios
    .get('http://localhost:2000/users')
    .then((response) => {
      // Handle the successful response here
      console.log('Data:', response.data);
    })
    .catch((error) => {
      // Handle any errors here
      console.error('Error:', error);
    });

  return (
    <div className="App">
      <h1>chat</h1>
      <div id="chat">
        <div className="person">
          <p>hej</p>
          <p>hej</p>
        </div>
      </div>
    </div>
  );
}

export default App;
