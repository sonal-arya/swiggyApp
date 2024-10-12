import UserClass from "./typeComponents/UserClass";
import { Component } from 'react';

class About extends Component {
    constructor(props){
        super(props)

        // console.log("parent constuctor")
    }
    componentDidMount(){
        // console.log("parent component did mount")
    }
    render(){
        // console.log("parent render")
        return (

            <div>
                <h1>Hey, It me About , what about you :) . </h1>
                <UserClass  
                component={"Class components"}
                name = {"Sonal Arya"}
                location = {"Delhi"}
                />
            </div>
        )
    }
}

export default About; 