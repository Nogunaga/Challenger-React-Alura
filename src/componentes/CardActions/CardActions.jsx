// CardActions.jsx
import React from "react";

const CardActions = ({ onEdit, onDelete }) => {
  return (
    <div>
      <button className="edit" onClick={onEdit}>
        Editar
      </button>
      <button className="delete" onClick={onDelete}>
        Borrar
      </button>
    </div>
  );
};

export default CardActions;

