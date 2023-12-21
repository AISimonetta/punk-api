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
    setLoadedBeers(data);
  };
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const { name, checked, value } = event.currentTarget;

    switch (name) {
      case 'searchName':
        setSearchName(value.toLowerCase());
        break;
      case 'highABV':
        setHighABVFilter(checked);
        break;
      case 'classic':
        setClassicFilter(checked);
        break;
      case 'highAcidity':
        setHighAcidityFilter(checked);
        break;
      default:
        break;
    }
  };

  const filteredBeers = loadedBeers.filter((beer) =>
  beer.name.toLowerCase().includes(searchName) &&
  (!highABVFilter || beer.abv > 6) &&
  (!classicFilter || Number(beer.first_brewed) < 2010) &&
  (!highAcidityFilter || beer.ph < 4)
);

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className='container'>
      <div>
        <Navbar
          searchName={searchName}
          handleInput={handleInput}
          highABVFilter={highABVFilter}
          classicFilter={classicFilter}
          highAcidityFilter={highAcidityFilter}
        />
      </div>
      <div>
        <Main filteredBeers={filteredBeers} />
      </div>
    </div>
  );
}

export default App;