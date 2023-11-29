import React, {useState, useEffect} from "react"
import Scroll from '../components/Scroll.js'
import CardList from "../components/CardList.js"
import SearchBox from "../components/SearchBox.js"
import ErrorBoundry from "../components/ErrorBoundry.js"
import "./App.css"


const App = ()=>{

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        }).then(users =>{
            setRobots(users)
    })},[]);

    const onSearchChange = (event) =>{
        setSearchfield(event.target.value);  
    }
    const filteredRobots = robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        });
    return !robots.length ?
        <h1 className="title">NO ROBOTS HERE</h1>:
        (
            <div className="tc">
                <h1 className="title">ROBOFRIENDS</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={ filteredRobots } />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
}

export default App;
