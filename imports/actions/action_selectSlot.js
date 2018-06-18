export function selectSlot (slot) {
  // selectBrand is an action creator, it needs to return an action
  // an object with a type property
  return {
    type: 'SLOT_SELECTED',
    payload: slot
  }
}
