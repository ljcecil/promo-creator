import React, { Component } from 'react';

export default class BrandListSelect extends Component {
  renderOptions() {
    return this.props.brands.map((brand)=>{
      return (
        <option key={brand.brandName} value={brand.brandName.toString().toLowerCase()}>
          {brand.brandName}
        </option>
      );
    });
  }
  render() {
    return (
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <select id="brand" name="brand"
          onChange= {(e) => this.props.selectBrand(e.target.value)}>
            {this.renderOptions()}
          </select>
        </div>
      )
  }
};
