import './Main.scss'
import Card from '../Card/Card';
import { Beer } from '../../types/types';


type MainProps = {
  filteredBeers: Beer[];
};

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
        <p className='main__noResults'>No matching results.</p>
      )}
    </div>
  );
};

export default Main;