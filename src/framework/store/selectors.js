import { createSelector } from 'reselect';

/**
 * Direct selector to the main state domain
 */
const select = (componentName, componentInstance, propertyName) => (state) => {
  const instanceState = state[`${componentName}_${componentInstance}`];
  if (instanceState) {
    return instanceState[propertyName];
  }
  return undefined;
};

/**
 * Other specific selectors
 */
export const createContainerSelector = (componentName, componentInstance, propertyName) => {
  return createSelector(
    select(componentName, componentInstance, propertyName),
    a => a
  );
};

export default createContainerSelector;
