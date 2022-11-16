import logo from './logo.svg';
import './App.css';

function Header(props) {
  console.log(props)
  const {name, color, fruit, className} = props;
  return <div>
    <h1 className={className}>{name} is {color} like a {fruit}</h1>
    </div>
}

function Footer({nickname}) {
  return <div> <h1>Goodbye {nickname}</h1>
  </div>
}

function App() {
  return (
    <div className="App">
      <Header className="header-tobia" name="Tobia" color="red" fruit="tomato"/>
      <Header className="header-isra" name="Isra" color="blue" fruit="blueberry"/>
      <Header className="header-tas" name="Tas" color="pink" fruit="dragon fruit"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ISRA IDRIS <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer nickname="Aleena"/>
    </div>
  );
}

export default App;
