import React from 'react';
import Option from './Option';


function Summary(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Option selected={props.selected}/>
        </section>
    )
};

export default Summary;