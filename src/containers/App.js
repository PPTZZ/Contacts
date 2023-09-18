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
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        });
        return !robots.length ?
        <h1 className="title">NO ROBOTS HERE</h1>:
        (
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
