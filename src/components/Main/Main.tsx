import './Main.scss'
import Card from '../Card/Card';
import { Beer } from '../../types/types';


type MainProps = {
  filteredBeers: Beer[];
};

//If there are not matching cards to display after the user applied the filters, return <p>No matching results.</p>
const Main = ({ filteredBeers }: MainProps) => {
  return (
    <div className='main__container'>
      {filteredBeers.length > 0 ? (
        filteredBeers.map((beer) => (
          <Card
            key={beer.name}
            name={beer.name}
            image_url={beer.image_url}
            description={beer.description}
          />
        ))
      ) : (
        <p>No matching results.</p>
      )}
    </div>
  );
};

export default Main;