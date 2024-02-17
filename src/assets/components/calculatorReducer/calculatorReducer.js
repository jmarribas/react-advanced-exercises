
export const INITIAL = {
  n1: 0,
  operation: "",
  result: 0,
  historicResults: [],
  historicResultsSorted: [],
};

export const calculatorReducer = (state, action) => {

  switch (action.type) {
    case "SET_OPERATION":
      return {
        ...state,
        n1: parseInt(action.payload.inputValue),
        operation: action.payload.operation,
      };
    case "CALCULATE":
      return {
        ...state,
        result: action.payload,
        n1: 0,
        operation: "",
        historicResults: [...state.historicResults, action.payload],
      };
    case "SORT":
      return { ...state, historicResultsSorted: [...action.payload] };
    default:
      return state;
  }
}

export default calculatorReducer