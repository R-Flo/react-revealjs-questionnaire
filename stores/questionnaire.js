import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import questionnaireReducer from "../reducers/questionnaire";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(questionnaireReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));
