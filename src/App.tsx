import { useState, FormEvent, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import { Beer } from './types/types';

function App() {
  const [loadedBeers, setLoadedBeers] = useState<Beer[]>([]);
  const [searchName, setSearchName] = useState('');
  const [highABVFilter, setHighABVFilter] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);
  const [highAcidityFilter, setHighAcidityFilter] = useState(false);

//Function to call  the api
  const getBeer = async () => {
    const url = 'https://api.punkapi.com/v2/beers';
    const response = await fetch(url);
    const data: Beer[] = await response.json();
    console.log('Fetched data:', data)
    setLoadedBeers(data);
  };

//function to handle inputs & states variables
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const { name, checked, value } = event.currentTarget;
    switch (name) {
      case 'searchName':
        setSearchName(value.toLowerCase());
        break;
      case 'highABVFilter':
        setHighABVFilter(checked);
        break;
      case 'classicFilter':
        setClassicFilter(checked);
        break;
      case 'highAcidityFilter':
        setHighAcidityFilter(checked);
        break;
      default:
        break;
    }
  };

// function to filter the beers
const filteredBeers = loadedBeers.filter((beer) => {
  const brewDate = new Date(beer.first_brewed);
  const isClassic = brewDate < new Date('01/2010');

  return (
    beer.name.toLowerCase().includes(searchName) &&
    (!highABVFilter || beer.abv > 6) &&
    (!classicFilter || isClassic) &&
    (!highAcidityFilter || beer.ph < 4)
  );
});

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className='container'>
      <div className='navbar'>
        <Navbar
          searchName={searchName}
          handleInput={handleInput}
          highABVFilter={highABVFilter}
          classicFilter={classicFilter}
          highAcidityFilter={highAcidityFilter}
        />
      </div>
      <div className='main'>
        <Main filteredBeers={filteredBeers} />
      </div>
    </div>
  );
}

export default App;