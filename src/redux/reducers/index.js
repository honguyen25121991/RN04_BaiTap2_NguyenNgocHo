const initState = {
  number: 10,
  // string: 'Hello World',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'COUNT_DOWN': {
      state.number = state.number - 1;
    }
    case 'COUNT_UP': {
      state.number = state.number + 1;
    }
    default:
      return {...state};
  }
};

export default reducer;
