import React from 'react';
import FeatureFieldset from '../FeatureFieldset/FeatureFieldset';


class MainForm extends React.Component {

  render() {

    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <FeatureFieldset
          feature={feature}
          options={this.props.features[feature]}
          key={featureHash}
          selectedFeatures={this.props.selectedFeatures}
          updateFeature={this.props.updateFeature}
        />
      )
    });

    return(
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}

export default MainForm;
