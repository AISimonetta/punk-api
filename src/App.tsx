import { useState, FormEvent, useEffect, MouseEventHandler } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import { Beer } from './types/types';

function App() {
  const [loadedBeers, setLoadedBeers] = useState<Beer[]>([]);
  const [searchName, setSearchName] = useState<string>('');
  const [highABVFilter, setHighABVFilter] = useState<boolean>(false);
  const [classicFilter, setClassicFilter] = useState<boolean>(false);
  const [highAcidityFilter, setHighAcidityFilter] = useState<boolean>(false);

  //Function to call  the api and have access to all the beers of the api.
const getBeer = async () => {
  const baseUrl = 'https://api.punkapi.com/v2/beers';
  let page = 1;
  const beersPerPage = 80;
  const allApiBeers = [];

  try {
    do {
      const urlWithPagination = `${baseUrl}?page=${page}&per_page=${beersPerPage}`;
      const response = await fetch(urlWithPagination);
      const data = await response.json();
//if there are no more beers to show, it will stop-break the loop.
      if (data.length === 0) {
        break;
      }
// adding the data array into allApiBeers array .
      allApiBeers.push(...data);
      page++;
    } while (page <= 5);
  } catch (err) {
    console.error(`Error, something is wrong ${err}`);
  }
  setLoadedBeers(allApiBeers);
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
  beer.name.includes(searchName) &&
  (!highABVFilter || beer.abv > 6) &&
// Number is converting the first_brewed string into a number, and slice() is removing the first characters .Ex "04/" of 04/2012 to only compare the years.
  (!classicFilter || Number(beer.first_brewed.slice(3)) < 2010) &&
  (!highAcidityFilter || beer.ph < 4)
);

// Function to reset input values while  pressing rest btn
const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
  setSearchName('');
  setHighABVFilter(false);
  setClassicFilter(false);
  setHighAcidityFilter(false);
};

  useEffect(() => {
    getBeer();
  }, [searchName, highABVFilter, classicFilter, highAcidityFilter, loadedBeers]);

  return (
    <div className='wholePage' >
      <h1 className='title__h1'>Punk-Api | Full access to the best craft beers </h1>

      <div className='container'>
        <div className='navbar'>
          <Navbar
            searchName={searchName}
            handleInput={handleInput}
            highABVFilter={highABVFilter}
            classicFilter={classicFilter}
            highAcidityFilter={highAcidityFilter}
            handleReset={handleReset}/>
        </div>
        <div className='main'>
          <Main filteredBeers={filteredBeers} />
        </div>
      </div>

    </div>
  );
}

export default App;