const initialState = {
    dataTrack: '',
    eyeBrow: '',
    h4: '',
    ctaText: '',
    ctaLink: '',
    detailsCopy: '',
    useCode: '',
    moustache15: '',
    moustache18: ''
};

export default function (state = initialState, action) {

    switch (action.type) {
        case 'FULL_PROMO_SELECTED':
            return {
                dataTrack: action.payload.dataTrack,
                eyeBrow: action.payload.eyeBrow,
                h4: action.payload.h4,
                ctaText: action.payload.ctaText,
                ctaLink: action.payload.ctaLink,
                detailsCopy: action.payload.detailsCopy,
                useCode: action.payload.useCode,
                moustache15: action.payload.moustache15,
                moustache18: action.payload.moustache18,
            };
        case "DATATRACK_CHANGE":
            return {
                ...state,
                dataTrack: action.payload,
            }
        case 'EYEBROW_CHANGE':
            return {
                ...state,
                eyeBrow: action.payload,
            }
        case 'H4_CHANGE':
            return {
                ...state,
                h4: action.payload,
            }
        case 'CTATEXT_CHANGE':
            return {
                ...state,
                ctaText: action.payload
            }
        case 'CTALINK_CHANGE':
            return {
                ...state,
                ctaLink: action.payload
            }
        case 'DETAILSCOPY_CHANGE':
            return {
                ...state,
                detailsCopy: action.payload
            }
        case 'USECODE_CHANGE':
            return {
                ...state,
                useCode: action.payload
            }
        case 'MOUSTACHE15_CHANGE':
            return {
                ...state,
                moustache15: action.payload
            }
        case 'MOUSTACHE18_CHANGE':
            return {
                ...state,
                moustache18: action.payload
            }
    }
    return state;
}