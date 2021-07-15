import {combineReducers, createReducer} from '@reduxjs/toolkit';
import {setAppMobile, setAppDesktop} from './appStateActions';

const isMobileByDefault = true;

const isAppMobile = createReducer(isMobileByDefault, {
  [setAppMobile]: () => true,
  [setAppDesktop]: () => false
});

export const appStateReducer = combineReducers({isAppMobile});
