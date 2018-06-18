import React from 'react';
import DOMPurify from 'dompurify';

const DetailsCopy = (props) => {
  return (
    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.detailsCopy)}} />
  );
};

export default DetailsCopy;
