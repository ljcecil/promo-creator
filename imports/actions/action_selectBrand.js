export function selectBrand (brand) {
  // selectBrand is an action creator, it needs to return an action
  // an object with a type property
  return {
    type: 'BRAND_SELECTED',
    payload: brand
  }
}
