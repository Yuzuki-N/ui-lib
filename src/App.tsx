import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} disabled href={"https://www.baidu.com"}>BaiDu</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>Hello</Button>

      </header>
    </div>
  );
}

export default App;
