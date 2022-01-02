import './App.css';
import styled from 'styled-components';
import Draggable from './components/Draggable';


//Testing components
const BlueSquare = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: lightblue;
`

const GreenCircle = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: lightgreen;
  border-radius: 100%;
`

function App() {

  return (
    <div className="App">
        <Draggable>
            <BlueSquare></BlueSquare>
            <GreenCircle></GreenCircle>
        </Draggable>
    </div>
  );
}

export default App;
