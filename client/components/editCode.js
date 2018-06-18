import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CodeMirror from 'react-codemirror';

var beautify_js = require('js-beautify').js_beautify;
var beautify_html = require('js-beautify').html;

export default class EditCode extends Component {
    constructor(props) {
        super(props);
        this.state = { code: beautify_html('<div class="modal-content"><button type="button" class="close close-corner CTA-CLOSE-MODAL" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button><div class="modal-body"><p>Cupcake ipsum dolor sit amet dessert. Cookie tart pastry. Cookie carrot cake chocolate cake chupa chups pastry macaroon gingerbread. Cheesecake apple pie powder jelly beans sweet roll lollipop cookie. Pie gummi bears icing. Halvah soufflé pudding brownie jujubes biscuit sweet roll chupa chups tart. Donut jujubes chocolate bar pudding biscuit fruitcake jujubes pastry sugar plum. Marzipan sweet roll halvah oat cake. Gummies sweet roll cheesecake halvah jelly cotton candy.</p><p class="coupon-code">Use Promo Code: XXXXX</p></div></div>') };
    }
    
    updateCode = (e) => {
        this.setState(
            {code: 'hi'}
        );
    };

    render() {
        var options = {
			lineNumbers: true,
            lineWrapping: true
		};
		return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
    }
};