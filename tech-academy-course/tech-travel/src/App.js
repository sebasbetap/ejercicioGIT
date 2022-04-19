import { ListOption } from "./components";

const customStyle = (backColor ='#9090ff') => ({
  backgroundColor: backColor,
  margin: '20px 30px'
})

function App() {
  return (
    <div className="App">
      <ul>
        <ListOption  style={customStyle('#750757')} tiempo="frío">Lunes</ListOption>
        <ListOption style={customStyle()}>Martes</ListOption>
        <ListOption className="blue">Miércoles</ListOption>
      </ul>
    </div>
  );
}

export default App;
