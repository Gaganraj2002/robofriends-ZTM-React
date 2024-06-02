import React from "react";

import { useState,useEffect } from "react";
import "./App.css";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const [count, setCount] = useState(0);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setRobots(users));
        console.log(count);
    }
    ,[count]);
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (robots.length === 0) {
        return (
            <div>   
                <h1>RoboFriends</h1>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <button onClick={() => setCount(count + 1)} className="br=4">Click Me!</button>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;