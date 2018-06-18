import React from 'react';
import DetailsCopy from './detailsCopy';
import DetailsUseCode from './detailsUseCode';
import If from '../if';

const Details = (props) => {
  const detailsUseCode = <DetailsUseCode useCode={props.useCode}/>;
  return (
    <div className="modal fade" id={"modal_"+props.dataTrack+"_details"} tabIndex="-1" role="dialog" aria-labelledby="modal-text-mbox1" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <button type="button" className="close close-corner CTA-CLOSE-MODAL" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                <div className="modal-body">
                    <DetailsCopy detailsCopy={props.copy}/>
                    <If condition={ props.useCode } then= { detailsUseCode } />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Details;
