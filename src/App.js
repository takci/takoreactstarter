import { useEffect } from 'react';
import logo from './logo.svg';
import styles from './App.module.css'
import Test from './Test'
import {Title} from "./Components";
import Bootstrap from './Bootstrap';

function App() {

  useEffect(() => {
  
    if(process.env.NODE_ENV === 'production') {
      // analytici bilgilendi
    }
  }, [])

  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>

      <p>
        {process.env.REACT_APP_API_URL}
      </p>

      <Test />

      {process.env.NODE_ENV === 'production' && (
        <>
        <img src="/logo192.png" alt=""/>
        <img src={logo} alt="" />
        </>
      )}
      <Bootstrap />
    </div>
  );
}

export default App;