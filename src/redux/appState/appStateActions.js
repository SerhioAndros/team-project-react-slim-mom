import {createAction} from '@reduxjs/toolkit';

const setAppMobile = createAction('appState/setAppMobile');
const setAppDesktop = createAction('appState/setAppDesktop');

export {setAppDesktop, setAppMobile};
