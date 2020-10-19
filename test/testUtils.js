import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

/**
 * Create a teting store with imported reducers, middleware,
 * and initial state
 * globals: rootReducer.
 * @function storeFactory
 * @param {object} initialState - Initial state for store
 * @returns {Store} Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * Returns node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};
