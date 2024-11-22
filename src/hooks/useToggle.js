import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_ARR":
      return {
        value: action.payload[state.count],
        count: state.count < action.payload.length - 1 ? state.count + 1 : 0,
      };
    case "TOGGLE_VALUE":
      return {
        ...state,
        value: action.payload,
      };

    case "TOGGLE_BOOLEAN":
      return {
        ...state,
        value: !state.value,
      };

    default:
      return state;
  }
}

export function useToggle(values) {
  const initialState = {
    value: Array.isArray(values)
      ? values[0]
      : values !== undefined
      ? values
      : true,
    count: 1,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleValue = (arg) => {
    if (Array.isArray(values)) {
      dispatch({ type: "TOGGLE_ARR", payload: values });
    } else if (typeof arg === "boolean") {
      dispatch({ type: "TOGGLE_BOOLEAN", payload: arg });
    } else if (!arg) {
      dispatch({ type: "TOGGLE_BOOLEAN" });
    } else {
      dispatch({ type: "TOGGLE_VALUE", payload: arg });
    }
  };

  return [state.value, toggleValue];
}
