const countReducer = (state = {number: 0}, action) => {
  switch (action.type) {
    case 'COUNT_UP':
      return {number: state.number + 1};
    case 'COUNT_DOWN':
      return {number: state.number - 1};
    default:
      return {...state};
  }
};

export default countReducer;
