import "./Card.scss";
import { useState } from 'react';

type CardProps = {
    image_url: string;
    name: string;
    description: string;
};

const Card = ({ image_url, name, description }: CardProps) => {

    const [zoomIn, setZoomIn] = useState(false);

//function to zoom in and out the cards while the mouse is over them.
    const handleMouseOver= () => {
        setZoomIn(true);
    };

    const handleMouseNoOver = () => {
        setZoomIn(false);
    };

    return (
        <div
            className={`card ${zoomIn ? 'zoomed' : ''}`}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseNoOver}
            >
            <div className="card zoomed">
                <div  className="card__image--container">
                    <img className="card__image" src={image_url} alt="beer Image" />
                </div>
            <div>
                <h1 className="card__title">{name.toUpperCase()}</h1>
                <h2 className="card__description">{description}</h2>
            </div>
        </div>
    </div>
    );
};

export default Card;
