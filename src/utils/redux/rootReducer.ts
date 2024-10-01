import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../../Screens/ScreenSignin/redux/authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
  
});

export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
export default rootReducer;