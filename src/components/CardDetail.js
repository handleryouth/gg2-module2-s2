import React from "react";

function CardDetail({ title, value }) {
  return (
    <div className="prose-h3:text-white prose-h3:my-0">
      <h3>{title}</h3>
      {typeof value !== "string" ? value : <p>{value}</p>}
    </div>
  );
}

export default CardDetail;
