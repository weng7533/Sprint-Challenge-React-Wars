import React from 'react';
import styled from 'styled-components'

// const listStyle = styled(li)`


// `


const list = (props) => {

    return (
        <li style={{ listStyleType: "none" }} > {props.data.name}</li >
    )



}



export default list;