import {Bot, Paper, Player, Rock, Scissor} from '../../GameApp/assets';

const selectedOptionConstant = [
  {type: 'rock', image: Rock},
  {type: 'paper', image: Paper},
  {type: 'scissor', image: Scissor},
];

const initState = {
  playerSelected: selectedOptionConstant[0],
  botSelected: selectedOptionConstant[1],
  selectOption: selectedOptionConstant,
  playerImage: Player,
  botImage: Bot,
  score: 0,
  times: 9,
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLAYER_SELECT':
      state.playerSelected = action.payload;
      return {...state};
    default:
      return state;
  }
};

export default gameReducer;
