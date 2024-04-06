import { useEffect } from 'react';
import logo from './logo.svg';

function App() {

  useEffect(() => {
    if(process.env.NODE_ENV === 'production') {
      // analytici bilgilendi
    }
  }, [])

  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV === 'production' && (
        <>
        <img src="/logo512.png" alt=""/>
        <img src={logo} alt="" />
        </>
      )}
    </div>
  );
}

export default App;