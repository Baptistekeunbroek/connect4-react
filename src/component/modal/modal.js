import "./modal.css";

const Modal = ({ isVisible, title, children }) => {
  if (!isVisible) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
