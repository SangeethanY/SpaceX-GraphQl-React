export const totaldata = (state = [], action) => {
  switch (action.type) {
    case "GETDATA":
      return action.data;

    default:
      return state;
  }
};
