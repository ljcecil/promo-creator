import React from 'react';
import If from '../if';
import DOMPurify from 'dompurify';

var preventClick= function(event) {
  event.preventDefault();
}

const MBox2Copy = (props) => {
    
  var addBreaks = function(field) {
      if (field) {
          const patt = /\n/g;
          return field.replace(patt, '<br /> ');
      }
  }
  
  const dataTrack = props.dataTrack;
  
  const smallEyebrow = <p className="small-eyebrow" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(addBreaks(props.eyebrow))}}></p>;
  
  var h4Text = <h4 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(addBreaks(props.h4))}}></h4>;
  
  const ctaText = props.ctaText;
  
  const ctaLink = <a href={props.ctaLink} className="med15" data-track={'Mbox2_'+dataTrack+'_ShopNow'} onClick={preventClick.bind(this)} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(addBreaks(props.ctaText))}} />;
  
  const useCode = <p className="med15">Use code: {props.useCode}</p>;
  
  const details = <a href="#" className="reg10" tabIndex="0" data-toggle="modal" aria-haspopup="true" data-track={'#modal_mbox2_'+dataTrack +'_details'}>Details</a>;

  return (
    <div className="module-img module-img-overlay">
      <div className="module-inner promoSlotBase mbox">
        <If condition={ props.eyebrow } then= { smallEyebrow } />
        <If condition={ props.h4 } then= { h4Text } />
        <If condition={ props.useCode } then= { useCode } />
        <If condition={ props.ctaText && props.ctaLink } then= { ctaLink } />
        <If condition={ props.detailsPresent } then= { details } />
      </div>
    </div>
  );
};

export default MBox2Copy;
