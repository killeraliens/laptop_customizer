import React from 'react';
import './MainSummary.css';
import FeatureSummary from '../FeatureSummary/FeatureSummary';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class MainSummary extends React.Component {
  render() {
    const featureSummaries = Object.keys(this.props.selectedFeatures).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selectedFeatures[feature];

      return(
        <FeatureSummary
          key={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      )
    });

    const total = Object.keys(this.props.selectedFeatures).reduce(
      (acc, curr) => acc + this.props.selectedFeatures[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {featureSummaries}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    )
  }
}

export default MainSummary;
