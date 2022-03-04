const initstate = {
  number: 1000,
  string: 'Hello World',
};

const reducer = (state = initstate, action) => {
  console.log(action);

  switch (action.type) {
    case 'countUp':
      state.number = state.number + 100;
      return {...state};

    case 'countDown':
      return {...state, number: state.number - 100};

    default:
      return {...state};
  }
};

export default reducer;
