import Emoji from "./components/Emoji";
import EmojisForm from "./components/EmojisForm";
import EmojisGroup from "./components/EmojisGroup";
import './Styles/style.css'


function App() {
  return (

    <Emoji>
      <div className='container'>
        <EmojisForm />
        <EmojisGroup />
      </div>
    </Emoji>
  );
}

export default App;
