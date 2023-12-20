import './Navbar.scss'
import '../SearchBox/SearchBox'
import SearchBox from '../SearchBox/SearchBox'
import FilterList from '../FilterList/FilterList';
import { FormEventHandler } from 'react';


type NavbarProps = {
  searchName: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const Navbar = ({ searchName, handleInput }: NavbarProps) => {
  return (
    <div className='navbar'>
      <div>
        <SearchBox searchName={searchName} onChange={handleInput} />
      </div>
      <div>
        <FilterList handleInput={handleInput} />
      </div>
    </div>
  );
};

export default Navbar;