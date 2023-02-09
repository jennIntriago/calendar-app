import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  _id: new Date().getTime(),
  title: "Cumpleaños de la Jefa",
  notes: "Hay que comprar el pastel",
  start: new Date(),
  end: addHours(new Date(), 2), //suma dos horas al evento
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Jennifer",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      // crea nueva nota
      state.events.push(payload);
      state.activeEvent = null; //limpiar evento activo
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions;
