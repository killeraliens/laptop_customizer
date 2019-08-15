import React from 'react';
import './FeatureSummary.css';


class FeatureSummary extends React.Component {
  render() {
    return(
        <div className="summary__option" >
          <div className="summary__option__label">{this.props.feature} </div>
          <div className="summary__option__value">{this.props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.formatUSCurrency(this.props.selectedOption.cost)}
          </div>
        </div>
    )
  }
}

export default FeatureSummary;
