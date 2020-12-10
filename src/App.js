 import {useState, useEffect} from 'react'

 import Review from './review'

 
 

function App() {
 
 
  return (
    <section>
    <h1 className='title' >Our Reviews</h1>
    <div className="underline"></div>
  <div className='text-component' >
  <Review />
  </div>
  </section>
  );
}

export default App;
