import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

function Parts(props) {
    return props.features[props.feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
        return (
            <div key={itemHash} className="feature__item">
            <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(props.feature)}
                checked={item.name === props.state[props.feature].name}
                onChange={e => props.updateFeature(props.feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
            </div>
    )}
)};

export default Parts;