import React from 'react';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD'
});

function Total(props) {
    const selected = props.selected 
    const total = Object.keys(selected).reduce(
        (acc, curr) => acc + selected[curr].cost,
        0
      );
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
            </div>
        </div>
        )
};

export default Total;