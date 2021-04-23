import React from 'react';
import Total from './Total';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
    });

function Option(props) {
    const option = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });

  return (
      <div>
          {option}
          <Total selected = {props.selected}/>
      </div>
  )
};

export default Option;