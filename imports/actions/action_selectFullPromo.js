export function selectFullPromo (fullPromo) {
  // selectBrand is an action creator, it needs to return an action
  // an object with a type property
  return {
    type: 'FULL_PROMO_SELECTED',
    payload: fullPromo
  }
}
