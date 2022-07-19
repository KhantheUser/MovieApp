import { configureStore } from "@reduxjs/toolkit";
import carrousel from "./Slices/carrousel";
import cinema from "./Slices/cinema";
import loading from "./Slices/loading";
import movie from "./Slices/movie";
import ticket from "./Slices/ticket";
import userAuth from "./Slices/userAuth";

const store = configureStore({
    reducer: {
        movie : movie,
        carrousel : carrousel,
        cinema : cinema,
        user : userAuth,
        ticket : ticket,
        loading : loading
    }
})
export default store