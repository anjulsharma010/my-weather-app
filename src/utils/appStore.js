import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import weatherSlice from "./weatherSlice"

const appStore = configureStore({
    reducer : {
        user: userSlice,
        weather: weatherSlice,
    }
})

export default appStore;