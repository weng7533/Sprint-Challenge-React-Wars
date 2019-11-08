import React from 'react';
import styled from 'styled-components'

const CardStyle = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;

&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
const Container = styled.div`
padding: 2px 16px;
`

const card = (props) => {

    return (<CardStyle>

        <Container>
            <h4><b>{props.data.name}</b></h4>
            <h2>birth year: {props.data.birth_year}</h2>
            <h2>eye color:  {props.data.eye_color}</h2>
            <h2>gender:     {props.data.gender}</h2>
        </Container>
    </CardStyle>
    )

}



export default card;