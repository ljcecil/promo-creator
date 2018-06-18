import React, { Component } from 'react';
// import If from '../if';
import promotions_chicos from '../../../imports/json_data/promotions_chicos';
import promotions_cotr from '../../../imports/json_data/promotions_cotr';
import promotions_whbm from '../../../imports/json_data/promotions_whbm';
import promotions_soma from '../../../imports/json_data/promotions_soma';

export default class PromoSelect extends Component {
  brand = this.props.brand ? ('promotions_'+ this.props.brand) : '';
  promos = this.props.brand ? eval('promotions_'+ this.props.brand) : eval('promotions_chicos');
  promoLength = Object.keys(this.promos).length;
  options = [];

  onChange = (e) => {
    let targetValue = e.target.value;
    this.props.selectPromotion(targetValue);
    if (targetValue.length && this.props.activeSlot) {
      let activeBrand = 'promotions_' + (this.props.activeBrand || 'chicos');
      let activeKey = 'promo_' + targetValue;
      let promo = eval(activeBrand)[activeKey];
      this.props.selectFullPromo(promo);
      // console.log('promoSelect: ', promo);
    }
  }

  render () {
    if (!this.brand || (this.brand !== ('promotions_'+ this.props.brand)) ) {
        this.brand = 'promotions_'+ (this.props.brand || 'chicos');
        this.promos = eval(this.brand);
        this.promoLength = Object.keys(this.promos).length;
        this.options = [];

        Object.keys(this.promos).forEach(function(key, i) {
            var formValue = eval(this.brand)[key].formValue;
            var formText = eval(this.brand)[key].formText;
            this.options.push( <option key={this.brand + i} value={formValue} > {formText} </option>);
        }, this);
    }
    return (
      <div className="form-group">
        <label htmlFor="promotions">Promotions</label>
        <select name="promotion" id="promotion"
        onChange={this.onChange.bind(this)} >
          <option value="">Select</option>
          { this.options }
        </select>
      </div>
    );
  }
};
