import "./Card.css";

const Card = ({ user }) => {
  const { name, tagline, img, logoImg, backgroundColor } = user;

  return (
    <div className="card-info" style={{ backgroundColor }}>
      <h4 className="card-heading">
        <span>{name}</span>
        <span>{tagline}</span>
      </h4>

      <img src={img} alt={name} className="card-img" />

      <div className="card-details">
        <img src={logoImg} alt={`${name} logo`} />
        <h5 className="logo-name">
          <span>angga</span>
          <span>tantama</span>
        </h5>
      </div>
    </div>
  );
};

export default Card;
