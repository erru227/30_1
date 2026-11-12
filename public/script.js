const root = ReactDOM.createRoot(document.getElementById("root"));




function Greeting(props) {
   function greetClick(greeting) {
      alert(`${greeting}, ${props.name}!`);
   }
 
   return (
      <div>
         <button onClick={() => greetClick("Hello")}>
            Say Hello
         </button>
         <button onClick={() => greetClick("Hey")}>
            Say Welcome
         </button>
      </div>
   );
}

function App() {
   return (
      <Greeting name="Jose" />
   );
}

root.render(<App/>);
