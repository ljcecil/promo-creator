import React, { Component } from 'react';
import Details from '../details/details';
import PCartCopy from './pcartCopy';
import If from '../if';

export default class PCart extends Component {
    render() {
        const detailsPresent = this.props.fullPromo.detailsCopy ? true : false;
        const providedDetails = <Details dataTrack={this.props.fullPromo.dataTrack} copy={this.props.fullPromo.detailsCopy} useCode={this.props.fullPromo.useCode}/>;
        
        const addPCart = <PCartCopy
          eyebrow={this.props.fullPromo.eyeBrow}
          dataTrack={this.props.fullPromo.dataTrack}
          h4={this.props.fullPromo.h4}
          useCode={this.props.fullPromo.useCode}
          ctaLink={this.props.fullPromo.ctaLink}
          ctaText={this.props.fullPromo.ctaText}
          detailsPresent={detailsPresent}
        />
        
        const details = <a href="#" className="reg10" tabIndex="0" data-toggle="modal" aria-haspopup="true" data-track={'#modal_mbox2_'+ this.props.fullPromo.dataTrack +'_details'}>Details</a>;
        
//        const copyButton = <button id="copyCode">Copy Code</button>;
        
//        const addCodeMirror = <EditCode />
        
        return (
            <div>
                <section className="module pcart bag-promo-img" id="mainpcartpromo">
            
                    <If condition={ this.props.fullPromo.dataTrack } then={ addPCart } />


                </section>
                
                <If condition={ this.props.fullPromo.detailsCopy } then= { providedDetails } />

            </div>
        );
    }
};

