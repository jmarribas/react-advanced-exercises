import { useReducer, useRef, memo, useCallback, useMemo } from "react";
import "./Calculator.css";
import { calculate } from "../../utils/calculate";
import calculatorReducer, { INITIAL } from "../calculatorReducer/calculatorReducer";

const Calculator = memo(() => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    INITIAL
  );

  const input = useRef();

  const { result, operation, n1, historicResults, historicResultsSorted } =
    state;

  const setOperation = useCallback(
    (operation) => {
      dispatch({
        type: "SET_OPERATION",
        payload: { inputValue: input.current.value, operation: operation },
      });
      input.current.value = "";
    },
    [result]
  );

  useMemo(() => {
    dispatch({
      type: "SORT",
      payload: historicResults.toSorted((a, b) => a - b),
    });
  }, [historicResults]);

  return (
    <div className="calculator">
      <input type="number" ref={input} />
      <div className="operations">
        <button onClick={() => setOperation("+")}>+</button>
        <button onClick={() => setOperation("-")}>-</button>
        <button onClick={() => setOperation("*")}>X</button>
        <button onClick={() => setOperation("/")}>/</button>
        <button onClick={() => setOperation("%")}>%</button>
        <button onClick={() => calculate(dispatch, input, n1, operation)}>
          =
        </button>
      </div>
      <h2>Último resultado: {result}</h2>
      <div className="historic">
        <h2>Resultados históricos</h2>
        {historicResultsSorted.map((resultH, index) => (
          <h3 key={index}>{resultH}</h3>
        ))}
      </div>
    </div>
  );
});

Calculator.displayName = 'Calculator';
export default Calculator;