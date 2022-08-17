// Initial State
let initialState = {
    counters: [
      {
        counterID: 0,
        value: 0,
        incrementBy: Math.floor(Math.random() * 10) + 1,
        decrementBy: Math.floor(Math.random() * 10) + 1,
      },
    ],
    totalCounters: 1,
  };

  // Reducer Function
function counterReducer(state = initialState, action) {
    if (action.type === ADD_COUNTER) {
      return {
        counters: [...state.counters, action.payload],
        totalCounters: state.totalCounters + 1,
      };
    }
    if (action.type === INCREMENT) {
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.counterID + 1 === Number(action.payload.id)) {
            return {
              ...counter,
              value: counter.value + counter.incrementBy,
            };
          } else {
            return counter;
          }
        }),
      };
    }
    if (action.type === DECREMENT) {
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.counterID + 1 === Number(action.payload.id)) {
  
            return {
              ...counter,
              value: counter.value - counter.decrementBy,
            };
          } else {
            return counter;
          }
        }),
      };
    }
    if (action.type === RESET_COUNTERS) {
      return {
        ...state,
        counters: state.counters.map((counter) => {
          return {
            ...counter,
            value: 0,
          };
        }),
      };
    }
    return state;
  }
  
  // create store with reducer
const store = Redux.createStore(counterReducer);