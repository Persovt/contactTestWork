import {
    combineRuducer
} from './reducer'

import { configureStore } from '@reduxjs/toolkit';

 const store = configureStore({
    reducer: combineRuducer,
    devTools: process.env.NODE_ENV !== 'production',
   });
   
export default store