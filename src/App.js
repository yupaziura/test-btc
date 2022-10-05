import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataFetched } from './actions/actions';

import Card from './components/Card/Card';
import Info from './components/Info/Info';


function App() {
  const {usd, eur, gbp} = useSelector(state => state);
    const dispatch = useDispatch();

    const getData = () => {
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then (response => response.json())
        .then (data => {
          return ({
            usd: data.bpi.USD.rate,
            gbp: data.bpi.GBP.rate,
            eur: data.bpi.EUR.rate,
          })
        })
        .then (data => dispatch(dataFetched(data)));
    }

    useEffect(() => {
      getData();
      setInterval(()=> {
        getData()
      }, 20000)
    }, [])


  return (
    <div className="App">
      {usd}
      {eur}
      {gbp}
    </div>
  );
}

export default App;
