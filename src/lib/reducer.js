import siteMap from '../sitemap.json';

const initialState = {
  collection: [],
  selectedIcons: [],
  siteMap,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_COLLECTION':
      return { ...state, collection: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer };