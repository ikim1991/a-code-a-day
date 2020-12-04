import React, { useState, useMemo, useEffect, useCallback } from 'react';
import ChildComponent from './ChildComponent';


const App = () => {

  const [count, setCount] = useState(0);
  const array = useMemo(() => {
    return ["One", "Two", "Three"]
  }, [])

  const fetchData: any = useCallback((type: any) => {
      console.log('From ', type)
      console.log("Fetching Data...")
      const data = {
        "data": true
      }
      console.log("Data Fetched... ", data)
  }, []);

  useEffect(() => {
    fetchData("Parent")
  }, [])

  console.log("Parent Component")
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count + 1)}>ADD</button>
      <ChildComponent title={"This is the Title"} fetchData={fetchData}/>
    </div>
  );
}

export default App;
