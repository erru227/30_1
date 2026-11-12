const root = ReactDOM.createRoot(document.getElementById("root"));




function Greeting(props) {
   function helloClick() {
      alert(`Hello, ${props.name}!`);
   }
 
   return (
      <button onClick={helloClick}>
         Say Hello
      </button>
   );
 }

function App() {
   return (
      <Greeting name="Jose" />
   );
}

root.render(<App/>);