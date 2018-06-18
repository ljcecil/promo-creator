import React, { Component } from 'react';
import promotions_chicos from '../../../imports/json_data/promotions_chicos';
import promotions_cotr from '../../../imports/json_data/promotions_cotr';
import promotions_whbm from '../../../imports/json_data/promotions_whbm';
import promotions_soma from '../../../imports/json_data/promotions_soma';

export default class PromoSlotSelect extends Component {
  checkPromotion = this.props.checkPromotion;

  onChange = (e) => {
    let targetValue = e.target.value;
    this.props.selectSlot(targetValue);
//    if (targetValue.length && this.props.activePromotion) {
//      let activeBrand = 'promotions_' + (this.props.activeBrand || 'chicos');
//      let activeKey = 'promo_' + this.props.activePromotion;
//      let promo = eval(activeBrand)[activeKey];
//      this.props.selectFullPromo(promo);
//      // console.log('promoSlotSelect: ', promo);
//    }
  }
  renderOptions() {
    return this.props.slots.map((slot)=>{
      return (
        <option key={slot.slotName} value={slot.slotName.toString().toLowerCase()}>
          {slot.slotName}
        </option>
      );
    });
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor="promotionSlots">Promo Slot</label>
        <select
          name="promotionSlots"
          id="promotionSlots"
          onChange={this.onChange.bind(this)}
        >
          <option value="">Select</option>
          {this.renderOptions()}
        </select>
      </div>
    )
  }
};
