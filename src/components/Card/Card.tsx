import "./Card copy.scss";

type CardProps = {
    image_url: string;
    name: string;
    description: string;
};

const Card = ({ image_url, name, description }: CardProps) => {
    return (
    <div>
        <div>
        <img src={image_url} alt="" />
        </div>
        <h1>{name.toUpperCase()}</h1>
        <h2>{description}</h2>
    </div>
    );
};

export default Card;
