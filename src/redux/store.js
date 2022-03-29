import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'

// const store = createStore(rootReducer, applyMiddleware(thunk) )