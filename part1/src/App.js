
import './App.css';
import Mensaje from './Mensaje.js'



const Description = () => {
  
  
  return <p>
    Esta es la app del curso fullstack bootcamp.
  </p>
}


function App() {
  return (
    <div className="App">
      

      <Mensaje color='red' message='Estamos trabajando'></Mensaje>
      <Mensaje color='green' message='En un curso'></Mensaje>
      <Mensaje color='yellow' message='De reactJS'></Mensaje>

      <Description></Description>
    </div>
  );
}

export default App;
  