import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { CalendarEvent, CalendarModal, Navbar } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";

const events = [
  {
    title: "Cumpleaños de la Jefa",
    notes: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2), //suma dos horas al evento
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Jennifer",
    },
  },
];
export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const eventStyleGetter = (event, start, end, isSeleted) => {
    // console.log({ event, start, end, isSeleted });
    const style = {
      backgroundColor: "#7158e2",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return { style };
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    console.log({ click: event });
  };
  const onViewChanged = (event) => {
    console.log({ viewChange: event });
    //se guardara en el localstorage para asi recordarlos
    localStorage.setItem("lastView", event);
    setLastView(event);
  };
  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
    </>
  );
};
