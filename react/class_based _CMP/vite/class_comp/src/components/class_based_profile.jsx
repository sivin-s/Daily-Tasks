// Note: we can't create class based component without render()
import {Component} from 'react'

class Profile extends Component{
  constructor(props){  {/* working 1st*/}
    super(props) // invoke parent class when inheritance 
    this.state={
      count: 0
    }
  }
  render(){
    const {count} = this.state

    // async componentDidMount(){ 
    //   /*it useEffect it inside code works after render*/
    //   /* working 3rd */
    //   // api calls
      
    // }

     return( /* working  2nd*/
        <>
          <h1>Profile class component</h1>
          <h2>name : {this.props.name}</h2>
          <h2>name : {count}</h2>
          {/* <button onClick={()=> this.setState({
            count: 1 
          })}>
             click
          </button> */}
          <button onClick={()=> this.setState((prev)=>(
            {
              count: prev.count+1
            }
          ))}>click</button>
        </>
     )
  }
}

export const Profile_CMP = Profile