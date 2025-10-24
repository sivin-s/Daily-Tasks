import {Provider} from 'react-redux'
import reduxStore from './redux/cake/store'
import {CakeContainer} from './CardContainer'

function App() {
 

  return (
    <Provider store={reduxStore}>
      <CakeContainer/>
    </Provider>
  )
}

export default App
