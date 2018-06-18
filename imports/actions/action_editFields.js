export function editFields(field, value) {
    // selectBrand is an action creator, it needs to return an action
    // an object with a type property
    var type = '';
//    var value = value;
    
//    if (hasBreak) {
//      const patt = /\n/g;
//      value = value.replace(patt, '<br /> ');
//    }
    
    switch (field) {
        case 'dataTrack': 
            type="DATATRACK_CHANGE";
            break;
        case 'eyeBrow':
            type = 'EYEBROW_CHANGE';
            break;
        case 'h4':
            type = 'H4_CHANGE';
            break;
        case 'ctaText':
            type = 'CTATEXT_CHANGE';
            break;
        case 'ctaLink':
            type = 'CTALINK_CHANGE';
            break;
        case 'detailsCopy':
            type = 'DETAILSCOPY_CHANGE';
            break;
        case 'useCode':
            type = 'USECODE_CHANGE';
            break;
        case 'moustache15':
            type = 'MOUSTACHE15_CHANGE';
            break;
        case 'moustache18':
            type = 'MOUSTACHE18_CHANGE';
            break;   
    }
    return {
        type: type,
        payload: value
    }
}