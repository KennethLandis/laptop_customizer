import React from 'react';
import Specs from './Specs';

function Form(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Specs
                features={props.features}
                state={props.state}
                updateFeature={props.updateFeature}
            />
        </form>
        )
};

export default Form;