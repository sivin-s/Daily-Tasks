import Cake_container from "./components/Cake_container"
import HookCakeContainer from "./components/HookCakeContainer"
import IckCream_container from "./components/IckCream_container"
import NewCakecontainer from './components/NewCakecontainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from "./components/UserContainer"

function App(){
  return( <>
    <UserContainer/>
    <ItemContainer cake hi='fuck'/>
    <Cake_container/>
    <HookCakeContainer/>
    <IckCream_container/>
    <NewCakecontainer/>
  </>)
}

export default App