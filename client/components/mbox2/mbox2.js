import React, { Component } from 'react';
import Details from '../details/details';
import MBox2Copy from './mbox2Copy';
import If from '../if';

export default class MBox2 extends Component {
    render() {
        const detailsPresent = this.props.fullPromo.detailsCopy ? true : false;
        const providedDetails = <Details dataTrack={this.props.fullPromo.dataTrack} copy={this.props.fullPromo.detailsCopy} useCode={this.props.fullPromo.useCode}/>;
        
        const addMbox2 = <MBox2Copy
          eyebrow={this.props.fullPromo.eyeBrow}
          dataTrack={this.props.fullPromo.dataTrack}
          h4={this.props.fullPromo.h4}
          useCode={this.props.fullPromo.useCode}
          ctaLink={this.props.fullPromo.ctaLink}
          ctaText={this.props.fullPromo.ctaText}
          detailsPresent={detailsPresent}
        />
        
//        const copyButton = <button id="copyCode">Copy Code</button>;
        
//        const addCodeMirror = <EditCode />
        
        return (
            <div>
                <section className="module" id="mainmbox2">
                    <If condition={ this.props.fullPromo.dataTrack } then={ addMbox2 } />
                    <If condition={ this.props.fullPromo.detailsCopy } then= { providedDetails } />
                </section>

            </div>
        );
    }
};

