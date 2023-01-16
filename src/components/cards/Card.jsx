const Card = ({ cardTitle, cardCaption, cardLink }) => {
  return (
    <div className="card">
      <h2>
        <a href={cardLink} target="_blank" rel="noreferrer">
          {cardTitle}
        </a>
      </h2>
      <p>{cardCaption}</p>
    </div>
  );
};

export default Card;
