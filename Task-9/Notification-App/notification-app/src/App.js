import logo from './logo.svg';
import './App.css';
import NotificationDisplay from './components/NotificationDisplay';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div className="App">
      <h1>Notification Display App</h1>
      {count == 0 ? "" : <div>wait {count} second </div>}

      <NotificationDisplay />
    </div>
  );
}

export default App;
