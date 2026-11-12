const root = ReactDOM.createRoot(document.getElementById("root"));
//TODO!!!   NOT COMPLETE YET, BUT THIS ONE DOES NOT HAVE FUNCTION ATTRIBUTES!!!



function makeAlert(message, props){
   alert(`${greeting}, ${props.name}`);
}

function Page(props) {
   return (
      <div>
         <button onClick={makeAlert("Hello")}>
            Hello Class
         </button>
         <button onClick={makeAlert("Welcome")}>
            Welcome Class
         </button>
      </div>
   );
}

root.render(<Page name="CS 316"/>);
