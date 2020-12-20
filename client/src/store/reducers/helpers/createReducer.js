const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    const { type } = action;
    return handlers.hasOwnProperty(type)
      ? handlers[type](state, action)
      : state;
  };
};

export default createReducer();