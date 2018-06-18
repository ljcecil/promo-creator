import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import If from '../components/if';

import BrandListSelect from '../components/_forms/brandListSelect';
import PromoSlotSelect from '../components/_forms/promoSlotSelect';
import PromoSelect from '../components/_forms/promoSelect';
import PromoEdit from '../components/_forms/promoEdit';

import { selectBrand } from '../../imports/actions/action_selectBrand';
import { selectPromotion } from '../../imports/actions/action_selectPromotion';
import { selectSlot } from '../../imports/actions/action_selectSlot';
import { selectFullPromo } from '../../imports/actions/action_selectFullPromo';
import { editFields } from '../../imports/actions/action_editFields';

import promotions_chicos from '../../imports/json_data/promotions_chicos';
import promotions_cotr from '../../imports/json_data/promotions_cotr';
import promotions_whbm from '../../imports/json_data/promotions_whbm';
import promotions_soma from '../../imports/json_data/promotions_soma';

class PromoForm extends Component {
  onSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const addPromoEdit = <PromoEdit fullPromo={this.props.fullPromo} editFields={this.props.editFields}/>;
    
    const addPromoSelect =<PromoSelect
          brand={this.props.activeBrand}
          selectPromotion={this.props.selectPromotion}
          activeSlot={this.props.activeSlot}
          selectFullPromo={this.props.selectFullPromo}
        />;

    return (
      <form onSubmit={this.onSubmit}>
        <BrandListSelect
          brands={this.props.brands}
          selectBrand={this.props.selectBrand}
        />
        <PromoSlotSelect
          slots={this.props.slots}
          selectSlot={this.props.selectSlot}
          activePromotion={this.props.activePromotion}
          selectFullPromo={this.props.selectFullPromo}
        />

        <If condition={ this.props.activeSlot } then={ addPromoSelect } />
        
        <If condition={ this.props.fullPromo } then={ addPromoEdit } />
        <button>Submit</button>
      </form>
    )
  }
}


function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside BrandListSelect
  return {
    brands: state.brands,
    slots: state.slots,
    activeBrand: state.activeBrand,
    activeSlot: state.activeSlot,
    activePromotion: state.activePromotion,
    fullPromo: state.fullPromo
  };
}

// Anything returned from this function will end up as props
// on the PromoForm container
function mapDispatchToProps(dispatch) {
  // Whenever selectBrand is called, the result
  // should be passed to all of our reducers.
  return bindActionCreators({selectBrand, selectPromotion, selectSlot, selectFullPromo, editFields}, dispatch);
}

// Promote PromoForm from a component to a container -
// it needs to know about this new dispatch method, selectBrand.
// Will make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(PromoForm);
