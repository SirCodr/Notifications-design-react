import Header from './components/Header';
import Body from './components/Body';

import { NotificationContextProvider } from './context/NotificationContext';

import './App.css';

function App() {

  return (
    <NotificationContextProvider>
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <Body />
        </div>
    </div>
    </NotificationContextProvider>
  );
}

export default App;
