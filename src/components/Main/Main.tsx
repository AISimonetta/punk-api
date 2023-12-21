import './Main.scss'
import Card from '../Card/Card';
import { Beer } from '../../types/types';


type MainProps = {
  filteredBeers: Beer[];
};


const Main = ({ filteredBeers } : MainProps) => {
  return (
    <div className='main'>
      {filteredBeers.map((beer) => (
        <Card
          key={beer.name}
          name={beer.name}
          image_url={beer.image_url}
          description={beer.description}
        />
      ))}
    </div>
  );
};

export default Main;