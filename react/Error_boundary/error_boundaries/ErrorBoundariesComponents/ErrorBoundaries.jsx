
import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props),
        this.state={hasError:false}
    }
    static getDerivedStateFromError(error){
        return{
           hasError:true
        }
    }
    componentDidCatch(error,info){
        //  is for debugging
        console.log('e>',error)
        console.log('e>',info)
    }
    render(){
        if(this.props.hasError){
          return  this.props.fallback
        }
        return this.props.children
    }
}

export default ErrorBoundary