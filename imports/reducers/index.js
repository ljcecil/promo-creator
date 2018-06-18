import { combineReducers } from 'redux';

import BrandReducer from './reducer_brands';
import PromoSlotReducer from './reducer_promo-slots';
import ActiveBrandReducer from './reducer_active-brand';
import ActiveSlotReducer from './reducer_active-slot';
import ActivePromotionReducer from './reducer_active-promotion';
import FullPromoReducer from './reducer_full-promo';

const rootReducer = combineReducers({
    brands: BrandReducer,
    activeBrand: ActiveBrandReducer,
    slots: PromoSlotReducer,
    activeSlot: ActiveSlotReducer,
    activePromotion: ActivePromotionReducer,
    fullPromo: FullPromoReducer
});

export default rootReducer;