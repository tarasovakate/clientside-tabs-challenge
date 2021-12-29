  import React, {useEffect, useState} from 'react';
import './App.css';
import Tabs from "./components/Tabs/Tabs";
import {TabsList} from "./interfaces/Tab";

function App() {

  const [items, setItems] = useState<TabsList>([])

  useEffect(() => {
    fetch('https://content.guardianapis.com/search?api-key=test')
      .then(response => response.json())
      .then(result => setItems(result.response.results))
      .catch((err) => console.log('Failed to fetch', err));
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <h1>Guardian clientside tabs challenge</h1>
        <Tabs items={items}/>
      </div>
    </div>
  );
}

export default App;
