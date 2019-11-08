import React, { useEffect, useState } from 'react';

import './App.css';
import Axios from 'axios';
import List from './list';
import Card from './card';
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [list, UpdateList] = useState([]);
  const [query, setQuery] = useState('');
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    Axios.get('https://swapi.co/api/people/?search=' + query)
      .then(res => {
        console.log(res);
        UpdateList(res.data.results);

      })

  }, [query])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {console.log(list)}


      {
        list.map((vlaue, index) => {
          return <List data={vlaue} key={index} />
        }

        )
      }



      {
        list.map((vlaue, index) => {
          return <Card data={vlaue} key={index} />
        }

        )
      }




    </div>
  );
}

export default App;
