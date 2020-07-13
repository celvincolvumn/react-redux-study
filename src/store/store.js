import { createStore } from "redux";

export default createStore((state, action) => {
  if (!state) {
    return { number: 0 };
  }
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number + action.size };

    default:
      break;
  }

  return state;
});
