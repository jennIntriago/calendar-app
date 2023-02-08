import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
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
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions;
