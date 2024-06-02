const Pill = (props) => {
  const { image, name, onClick, className } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={image} alt={name} />
      <span>{name}</span>
      <b>&times;</b>
    </div>
  );
};

export default Pill;
