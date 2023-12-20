import { useState, FormEvent } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import beers from './data/Beers';
import Card from './components/Card/Card';

//MY notes:
//first_brewed before 2010
//high acidity ph lowerthan 4
//high alcohol abv > 6%

//I need to move card to Main componenet. Fetch api from here, and instead of 
// of working with Beer data. i work wth re data response of the api.

//get data from api


function App() {
const [searchName, setSearchName] = useState('');
const [highABVFilter, setHighABVFilert] = useState('');
const [classicFilter, setClassicFilter] = useState('');
const [highAcidityFilter, setHighAcidityFilter] = useState('');


const handleInput = (event: FormEvent<HTMLInputElement>) => {
switch (event) {
    case value:
        
        break;

    default:
        break;
}

 const nameInput = event.currentTarget.value.toLowerCase();
  setSearchName(nameInput);



};

const filteredBeers = beers.filter((beer) =>
beer.name.toLowerCase().includes(searchName)
);

return (
    <div className='container'>
      <div>
        <Navbar searchName={searchName} handleInput={handleInput} />
        
      </div>
      <div>


        <Main filteredBeers={filteredBeers} />
        {filteredBeers.map((beer) => (
          <Card
            key={beer.name}
            name={beer.name}
            image_url={beer.image_url}
            description={beer.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App
