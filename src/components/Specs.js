import React from 'react';
import Parts from './Parts';


function Specs(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        
        return (
            <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{feature}</h3>
            </legend>
                <Parts
                    feature={feature}
                    features={props.features}
                    state={props.state}
                    updateFeature={props.updateFeature}
                 />
            </fieldset>
        )} 
    );

    return (
        <div>
            {features}
        </div>
    )
};  
export default Specs;