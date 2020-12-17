const initialState = {
  loading: true,
  getdataStatus: [],
  getUser: [],
};

export default (state = initialState, action) => {//console.log(initialState);console.log(action);
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        getdataStatus: action.payload,
      };
    case 'FETCH_DATA_USER':
      //console.log(action.payload);
      return {
        ...state,
        loading: false,
        getUser: action.payload,
      };
  
    case 'SHOW_DATA_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
