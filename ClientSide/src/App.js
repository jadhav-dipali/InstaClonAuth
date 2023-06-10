import logo from './logo.svg';
import './App.css';
// import InstaClone from './Component/InstaClone';
import AppRouter from './Component/AppRouter';
import ContextPost from './context/ContextPost';



function App() {
    // let value = useContext(UserContext)
  return (
    <>
   <ContextPost>
      <AppRouter/>
   </ContextPost>
    
    </>
  );
}

export default App;
