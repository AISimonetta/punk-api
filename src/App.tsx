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
    const url = 'https://api.punkapi.com/v2/beers?page=2&per_page=80';
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


//Function to filter the beers
const filteredBeers = loadedBeers.filter((beer) =>
  beer.name.toLowerCase().includes(searchName) &&
  (!highABVFilter || beer.abv > 6) &&
// number is converting the first_brewed string into a number, and slice() is removing the first characters .Ex "04/" of 04/2012 to only compare the year.
  (!classicFilter || Number(beer.first_brewed.slice(3)) < 2010) &&
  (!highAcidityFilter || beer.ph < 4)
);

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className='container'>

        <h1 className='container__h1'>Punk-Api</h1>
        <h2 className='container__h2'>| Full access to the best craft beers. Find your favourite ! |</h2>

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