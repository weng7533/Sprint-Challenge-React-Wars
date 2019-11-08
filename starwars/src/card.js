import React from 'react';
import styled from 'styled-components'

const CardStyle = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  margin: 1% 0;

&:hover {
    box-shadow: 0 32px 64px 0 rgba(0,0,0,0.2);
  }
`


const Container = styled.div`
padding: 2px 16px;
margin: 5%;
color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`

const card = (props) => {

    return (<CardStyle>

        <Container>
            <h3><b>{props.data.name}</b></h3>
            <h5>birth year: {props.data.birth_year}</h5>
            <h5>eye color:  {props.data.eye_color}</h5>
            <h5>gender:     {props.data.gender}</h5>
        </Container>

    </CardStyle>
    )

}



export default card;