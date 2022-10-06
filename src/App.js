import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataFetched } from './actions/actions';
import { formatNumber } from './utils/formatNumber';

import Card from './components/Card/Card';
import Info from './components/Info/Info';
import Title from './components/Title/Title';

import './App.css';


function App() {
  const {usd, eur, gbp} = useSelector(state => state);
    const dispatch = useDispatch();

    const getData = () => {
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then (response => response.json())
        .then (data => {
          return ({
            usd: formatNumber(data.bpi.USD.rate_float),
            gbp: formatNumber(data.bpi.GBP.rate_float),
            eur: formatNumber(data.bpi.EUR.rate_float),
          })
        })
        .then (data => dispatch(dataFetched(data)));
    }

    useEffect(() => {
      getData();
      // setInterval(()=> {
      //   getData()
      // }, 20000)
    }, [])


  return (
    <div className="App">
      <Title/>
      <Card>
        <Info title={'GBP'} value ={gbp}/>
        <Info title={'USD'} value ={usd}/>
        <Info title={'EUR'} value ={eur}/>
      </Card>
    </div>
  );
}

export default App;
