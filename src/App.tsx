import { useState, FormEvent } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import beers from './data/Beers';
import Card from './components/Card/Card';



function App() {
const [searchName, setSearchName] = useState('');
const [highABVFilter, setHighABVFilert] = useState('');
const [classicFilter, setClassicFilter] = useState('');
const [highAcidityFilter, setHighAcidityFilter] = useState('');

const handleInput = (event: FormEvent<HTMLInputElement>) => {
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
        {filteredBeers.map((beer) => (
          <Card
            key={beer.name}
            name={beer.name}
            image_url={beer.image_url}
            description={beer.description}
          />
        ))}
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App
