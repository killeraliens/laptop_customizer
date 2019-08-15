import React from 'react';
import slugify from 'slugify';
import FeatureOption from '../FeatureOption/FeatureOption';

class FeatureFieldset extends React.Component {
  render() {

    const options = this.props.options.map((item, idx) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureOption
          id={itemHash}
          key={itemHash}
          feature={this.props.feature}
          item={item}
          selectedFeatures={this.props.selectedFeatures}
          updateFeature={this.props.updateFeature}/>
      )
    });

    return (
      <fieldset className="feature" >
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    )
  }
}

export default FeatureFieldset;
