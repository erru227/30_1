const root = ReactDOM.createRoot(document.getElementById("root"));

// Returns the input text, or "DEFAULT" if it's empty or only whitespace
function collectValue(name) {
  return name.trim() === "" ? "DEFAULT" : name;
}

function handleTitleClick(name, setTitle) {
  setTitle(collectValue(name));
}

function handleContentClick(name, setContent) {
  setContent(collectValue(name));
}

function handleNameChange(setName, event) {
  setName(event.target.value);
}

function Greeting(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [name, setName] = React.useState("");

  return (
    <div>
      <h1 id="title">{title}</h1>
      <p id="content">{content}</p>
      <input
        id="namebox"
        value={name}
        onChange={handleNameChange.bind(null, setName)}
      />
      <button onClick={handleTitleClick.bind(null, name, setTitle)}>
        Change Header
      </button>
      <button onClick={handleContentClick.bind(null, name, setContent)}>
        Change Paragraph
      </button>
    </div>
  );
}

function App() {
  return <Greeting name="Jose" />;
}

root.render(<App />);
