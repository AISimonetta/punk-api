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
// These two functions were needed because there was a shaking bug while hoovering the cards.
    const handleMouseOver= () => {
        setZoomIn(true);
    };

    const handleMouseNoOver = () => {
        setZoomIn(false);
    };

    return (
        <div
        // onMouseLeave & onMouseLeave were used to control the behavior while the mouse was over the element
        // and as a solution to the shake error while hoovering the cards.
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
