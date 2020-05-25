export const getFilterQuery = state => state.filter;

export const getFilterOnChangeQuery = (reducer, query) =>
  reducer.actions.changeQuery(query);
