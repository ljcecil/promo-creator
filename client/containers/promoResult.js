import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFullPromo } from '../../imports/actions/action_selectFullPromo';

import If from '../components/if';
import EditCode from '../components/editCode';

import MBox2 from '../components/mbox2/mbox2';
import PCart from '../components/pcart/pcart';

class PromoResult extends Component {
  render() {
    const addMbox2 = <MBox2 fullPromo={this.props.fullPromo} />;
    const addPCart = <PCart fullPromo={this.props.fullPromo} />;
      
    return (
        <div>
            <If condition={ this.props.activeSlot == 'mbox2' && this.props.fullPromo.dataTrack } then={ addMbox2 } />
            <If condition={ this.props.activeSlot == 'pcart' && this.props.fullPromo.dataTrack } then={ addPCart } />
        </div>
    )
  }
}

        
//            <If condition={ this.props.fullPromo.dataTrack } then={ addCodeMirror } />
//                <If condition={ this.props.fullPromo.dataTrack } then={ copyButton } />


function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside BrandListSelect
  return {
      fullPromo: state.fullPromo,
      activeSlot: state.activeSlot
  };
}

// Anything returned from this function will end up as props
// on the PromoForm container
function mapDispatchToProps(dispatch) {
  // Whenever selectBrand is called, the result
  // should be passed to all of our reducers.
  return bindActionCreators({selectFullPromo}, dispatch);
}

// Promote PromoResult from a component to a container -
// it needs to know about this new dispatch method, selectBrand.
// Will make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(PromoResult);