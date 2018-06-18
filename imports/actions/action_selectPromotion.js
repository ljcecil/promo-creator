export function selectPromotion (promotion) {
  // selectBrand is an action creator, it needs to return an action
  // an object with a type property
  return {
    type: 'PROMOTION_SELECTED',
    payload: promotion
  }
}
