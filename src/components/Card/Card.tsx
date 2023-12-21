import "./Card.scss";

type CardProps = {
    image_url: string;
    name: string;
    description: string;
};

const Card = ({ image_url, name, description }: CardProps) => {
    return (
    <div >
        <div className="card">
            <img  className="card__image" src={image_url} alt="beer Image" />
            <h1>{name.toUpperCase()}</h1>
            <h2>{description}</h2>
        </div>
    </div>
    );
};

export default Card;
