import {createContext, useContext} from 'react'

// export const useUserContext = createContext({user:'',age:0}) // no ts
export const userContext = createContext(undefined)

export const useUserContext  = ()=>{
    console.log("called!!!")
    // console.log(useContext)
    const user= useContext(userContext)
    console.log(user)
    if(user===undefined){ // some time dev try forget adding value to value properties eg: value={}
        throw new Error('userUserContext must be used with a DashboardContext')
    }
    return user; 
}
