import React from "react";
import "./App.css"; 
import SearchBox from "./components/search/search-box";
import {useEffect, useState} from "react"
import { Monster } from "./models/monster.model";
import CardList from "./components/card-list/card-list.component";


const App = ()=> {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchFiled, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>response.json())
  .then((users:Monster[])=>setMonsters(users))
},[])

useEffect(()=>{
  const newFilteredMonsters = monsters.filter((monsters) => {
    return monsters.name.toLocaleLowerCase().includes(searchFiled);
  });
  setFilteredMonsters(newFilteredMonsters);
}, [searchFiled, monsters]);

const onSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const searchFiledString = event.target.value.toLowerCase();
  setSearchField(searchFiledString);
}

  return(
    <div className="app">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox hint="Search Monsters" onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => onSearch(event)}/>
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;