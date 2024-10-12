import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           userInfo : {
            name: "xyz",
            location : "",
            img : "",
           },
        }
        
        // console.log("child constructor")
    }
    async componentDidMount(){

        
            const data  = await fetch("https://api.github.com/users/sonal-arya")
            const res = await data.json();
            console.log( res)
        
            this.setState({
                userInfo: res,
            })
        }

  
    render() {
        const { name, avatar_url, location } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location} </h3>
                <h4>Contact : @sonalarya14</h4>
                {/* <p>{this.props.component}</p> */}
            </div>
        );
    }
}

export default UserClass; 