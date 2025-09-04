
import {A,B,C} from './components/index'
function App() {
  return (
    <>
        <A props={{user:"Hi"}}>
          <B>
            <C/>
          </B>
        </A>   
    </>
  )
}

export default App
