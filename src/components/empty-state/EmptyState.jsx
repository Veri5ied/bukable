const EmptyState = ({ stateImg, stateText }) => {
  return (
    <div className="homeemptystate">
      <>{stateImg}</>
      <h3>{stateText}</h3>
    </div>
  );
};

export default EmptyState;
