import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSeleted } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  const handleDelete = () => {
    startDeletingEvent();
  };
  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
      style={{
        display: hasEventSeleted && isDateModalOpen === false ? "" : "none",
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
