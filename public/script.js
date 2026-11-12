const root = ReactDOM.createRoot(document.getElementById("root"));

function makeAlert(message, props){
   let output = message + ", "+props.name;
   alert(output);
}

function Page(props) {
   return (
      <div>
         <h1>React Events</h1>
         <button onClick={makeAlert.bind("Hello", props)}>
            Hello Class
         </button>
         <br />
         <button onClick={makeAlert.bind("Welcome", props)}>
            Welcome Class
         </button>
      </div>
   );
}

root.render(<Page name="CS 316"/>);
