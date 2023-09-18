import React from "react"
import Scroll from '../components/Scroll.js'
import CardList from "../components/CardList.js"
import SearchBox from "../components/SearchBox.js"
import "./App.css"


class App extends React.Component{
    constructor(){
        super();
        this.state ={
            robots: [],
            searchfield : '',
        }

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users =>{
            this.setState({robots:users})
        })
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});  
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        });
        return (
            <div className="tc">
                <h1 className="title">ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={ filteredRobots } />
                </Scroll>
            </div>
        );
    }
}

export default App;
