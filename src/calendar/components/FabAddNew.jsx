import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const hanldeClicNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2), //suma dos horas al evento
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Jennifer",
      },
    });
    openDateModal();
  };
  return (
    <button className="btn btn-primary fab" onClick={hanldeClicNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
