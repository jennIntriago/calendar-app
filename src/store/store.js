import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, uiSlice } from "./";

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
  },
  //* Configurar RTK query (middlewares) para resolver asunto de fechas
  //*Pilas con esto puede arreglar el context del Map Noise App
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Esto es para que no serialize las posibles fechas
      serializableCheck: false,
    }),
});
