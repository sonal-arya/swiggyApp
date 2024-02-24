const heading = React.createElement("h1" , {id:"h1-xyz" , className:"heading1"} , "Hello react from html file");
console.log(heading);
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);