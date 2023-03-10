import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  //* esta vez no se usanran los thunks, seran acciones asincronas
  const startSavingEvent = async (calendarEvent) => {
    //TODO: llegar al backend

    //TODO bien
    if (calendarEvent._id) {
      //actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //creando..
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = () => {
    //todo llegar al backend

    dispatch(onDeleteEvent());
  };
  return {
    //* Propiedades
    events,
    activeEvent,
    hasEventSeleted: !!activeEvent,

    //* Metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
