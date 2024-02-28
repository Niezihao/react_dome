/*
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2024-01-30 17:55:47
 * @LastEditors: niezihao
 * @LastEditTime: 2024-02-18 09:17:30
 */
import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent'

function App() {
  const someData = "来自父组件的数据";

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
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
        <ChildComponent datas={someData}></ChildComponent>
      </header>
    </div>
  );
}

export default App;
