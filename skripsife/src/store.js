import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const middleware = [thunk];
const store = createStore(rootReducer, compose(composeWithDevTools(applyMiddleware(thunk))));
export default store;