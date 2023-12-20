import { useState, FormEvent } from 'react';
import './Navbar.scss'
import '../SearchBox/SearchBox'
import SearchBox from '../SearchBox/SearchBox'
import beers from '../../data/Beers';
import Card from '../Card/Card.tsx'


const Navbar = () => {

const [searchName, setSearchName] = useState('');

const handleSearchByNameInput = (event: FormEvent<HTMLInputElement>) => {
  const nameInput = event.currentTarget.value.toLowerCase();
  setSearchName(nameInput);
};

const filteredBeers = beers.filter((beer) =>
beer.name.toLowerCase().includes(searchName)
);
  return (
    <div className='navbar'>
      <SearchBox searchName={searchName} onChange={handleSearchByNameInput} />
      {filteredBeers.map((beer) => (
        <Card
          key={beer.name} // Adding a key to each Card component
          name={beer.name}
          image_url={beer.image_url}
          description={beer.description}
        />
      ))}
    </div>
  );
}

export default Navbar