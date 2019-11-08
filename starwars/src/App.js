import React, { useEffect, useState } from 'react';

import './App.css';
import Axios from 'axios';
import List from './list';
import Card from './card';
import styled from 'styled-components'

const CardContainer = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-around;

`
const SearchBarDiv = styled.div`
  
  padding: 2em;
  margin: 1% 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 32px 64px 0 rgba(0,0,0,0.2);
  }

`

const ButtonDiv = styled.div`
  
  padding: 1em;
  margin: 1% 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: flex;
  justify-content: space-around;

  &:hover {
    box-shadow: 0 32px 64px 0 rgba(0,0,0,0.2);
  }

`
const ButtonWord = styled.h4`
padding: .5em;
margin: 1% 0;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;

&:hover {
  box-shadow: 0 32px 64px 0 rgba(0,0,0,0.2);
}

`

const SearchBarForm = styled.form`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
`

const SearchBarInput = styled.input`
border: none;
whitespace: wrap;
border-radius: 5px 5px 5px 5px;
background: #E9E9E9;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
padding: 0.35em 0.75em;
border: none;
font-size: 1.1em;
text-decoration: none;
line-height: normal;
max-height: 3em;

flex: 2 0 250px;

&:focus {
  background: Thistle;
  color: white;
  letter-spacing: .1em;
  transition: background 400ms ease-in-out;
  outline: none;
}

`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [list, UpdateList] = useState([]);
  const [query, setQuery] = useState('');
  const [apiLink, setApiLink] = useState('https://swapi.co/api/people/?search=');
  const [lastPageLink, setlastPageLink] = useState('');
  const [nextPageLink, setnextPageLink] = useState('');
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {

    Axios.get(apiLink + query)
      .then(res => {
        console.log(res);
        UpdateList(res.data.results);
        setlastPageLink(res.data.previous);
        setnextPageLink(res.data.next);

      })

  }, [apiLink, query])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {console.log(list)}


      {/* {
        list.map((vlaue, index) => {
          return <List data={vlaue} key={index} />
        }

        )
      } */}


      <SearchBarDiv>
        <SearchBarForm>
          <SearchBarInput type="search" name="search" value={query} onChange={e => setQuery(e.target.value)} />

          <ButtonDiv>
            <ButtonWord onClick={() => setApiLink(lastPageLink)}>Last Page</ButtonWord>  <ButtonWord onClick={() => setApiLink(nextPageLink)} >Next Page</ButtonWord>
          </ButtonDiv>

        </SearchBarForm>
      </SearchBarDiv>

      <CardContainer>
        {
          list.map((vlaue, index) => {
            return <Card data={vlaue} key={index} />
          }

          )
        }

      </CardContainer>



    </div>
  );
}

export default App;
