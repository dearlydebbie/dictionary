import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="text" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by
            <a href="https://github.com/dearlydebbie/dictionary">
              {" "}
              Deborah Adeoye
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}