import React from "react";
import '../containers/App.css' 

class ErrorBoundry extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true })
    }
    
    render(){
         if (this.state.hasError){
            return(  
            <h1 className="title">OOOPS... That is not good...</h1>
         )}
         return this.props.children
    }
}

export default ErrorBoundry;