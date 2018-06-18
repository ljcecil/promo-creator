import React, { Component } from 'react';
import If from '../../components/if';

export default class PromoEdit extends Component {

  render() {
    const addDataTrack = <div className="form-group">
      <label htmlFor="dataTrack">Data Track</label>
      <input name="dataTrack" id="dataTrack" value={this.props.fullPromo.dataTrack} onChange= {(e) => this.props.editFields('dataTrack', e.target.value)} />
    </div>;
    const addEyeBrow = <div className="form-group">
      <label htmlFor="eyeBrow">EyeBrow</label>
      <textarea name="eyeBrow" id="eyeBrow" value={this.props.fullPromo.eyeBrow} onChange= {(e) => this.props.editFields('eyeBrow', e.target.value)} />
    </div>;
    const addH4 = <div className="form-group">
      <label htmlFor="h4">h4</label>
      <textarea name="h4" id="h4" value={this.props.fullPromo.h4} onChange= {(e) => this.props.editFields('h4', e.target.value)} />
    </div>;

    const addUseCode = <div className="form-group">
      <label htmlFor="useCode">Use Code</label>
      <input name="useCode" id="useCode" value={this.props.fullPromo.useCode} onChange= {(e) => this.props.editFields('useCode', e.target.value)} />
    </div>;

    const addCtaText = <div className="form-group">
      <label htmlFor="ctaText">CTA Text</label>
      <textarea name="ctaText" id="ctaText" value={this.props.fullPromo.ctaText} onChange= {(e) => this.props.editFields('ctaText', e.target.value)} />
    </div>;

    const addCtaLink = <div className="form-group">
      <label htmlFor="ctaLink">CTA Link</label>
      <input name="ctaLink" id="ctaLink" value={this.props.fullPromo.ctaLink} onChange= {(e) => this.props.editFields('ctaLink', e.target.value)} />
    </div>;

    const addMoustache15 = <div className="form-group">
      <label htmlFor="moustache15">Moustache15</label>
      <textarea name="moustache15" id="moustache15" value={this.props.fullPromo.moustache15} onChange= {(e) => this.props.editFields('moustache15', e.target.value)} />
    </div>;

    const addMoustache18 = <div className="form-group">
      <label htmlFor="moustache18">Moustache18</label>
      <textarea name="moustache18" id="moustache18" value={this.props.fullPromo.moustache18} onChange= {(e) => this.props.editFields('moustache18', e.target.value)} />
    </div>;

    const addDetailsCopyForm = <div className="form-group">
      <label htmlFor="detailsCopy">Details Copy</label>
      <textarea name="detailsCopy" id="detailsCopy" value={this.props.fullPromo.detailsCopy} onChange= {(e) => this.props.editFields('detailsCopy', e.target.value)} />
    </div>;

    return (
      <div>
          <If condition={ this.props.fullPromo.dataTrack } then= { addDataTrack } />
          <If condition={ this.props.fullPromo.eyeBrow } then= { addEyeBrow } />
          <If condition={ this.props.fullPromo.h4 } then= { addH4 } />
          <If condition={ this.props.fullPromo.useCode } then= { addUseCode } />
          <If condition={ this.props.fullPromo.ctaText } then= { addCtaText } />
          <If condition={ this.props.fullPromo.ctaLink } then= { addCtaLink } />
          <If condition={ this.props.fullPromo.detailsCopy } then= { addDetailsCopyForm } />
          <If condition={ this.props.fullPromo.moustache15 } then= { addMoustache15 } />
          <If condition={ this.props.fullPromo.moustache18 } then= { addMoustache18 } />
      </div>
    );
  }
};
