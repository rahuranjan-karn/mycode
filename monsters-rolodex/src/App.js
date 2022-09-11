import { Component } from 'react';
import { useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField,setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonster, setFilterMonster] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect( () => {
    const newFilterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
 });
 setFilterMonster(newFilterMonster);

  },[monsters,searchField])

  
  const OnSearchChange= (event) => {

    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  
  }

  // const filterMonster = monsters.filter((monster) => {
  //        return monster.name.toLocaleLowerCase().includes(searchField);
  //   });

  return(
    <div className="App">

        <h1 className='app-title'>Monster Rolodex</h1>
        
        <SearchBox 
        className='monsters-search-box' 
        OnChangehandler = {OnSearchChange} 
        placeHolder = 'search monsters'>
        </SearchBox>

        {/* {filterMonster.map((monster) => {
          return(
            <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>
          )
        })} */}
        
        <CardList monsters={filterMonster}></CardList>
      </div>
  )

}

// class App extends Component {

//   constructor(){
//     super();
//     this.state={
//       monsters:[],
//       searchField:''
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => 
//      this.setState(
//       () => {
//         return {monsters:users}
//       }
//      )
//     )
//   }

//   OnSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
   
    
//     this.setState(() => {
//       return {searchField}
//     })

//   }

//   render(){

//     const {monsters,searchField} = this.state;
//     const {OnSearchChange} = this;

//     const filterMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//      });

//     return (
//       <div className="App">

//         <h1 className='app-title'>Monster Rolodex</h1>
        
//         {/* {filterMonster.map((monster) => {
//           return(
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//               </div>
//           )
//         })} */}
//         <SearchBox className='monsters-search-box' OnChangehandler = {OnSearchChange} placeHolder = 'search monsters'></SearchBox>
//         <CardList monsters={filterMonster}></CardList>
//       </div>

//     );

//    }

 
// }

export default App;
