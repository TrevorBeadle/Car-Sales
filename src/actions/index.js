export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEARTURE";

export const addFeature = newFeature => {
  return {
    type: ADD_FEATURE,
    payload: newFeature,
    price: newFeature.price,
  };
};

export const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE,
    payload: feature,
    price: feature.price,
  };
};
