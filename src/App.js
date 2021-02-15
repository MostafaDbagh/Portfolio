import React from 'react';
import './App.css'
import './style/style.css'
import {Heading,Container,Content,Build,Contact,Footer,Myjourney, Projects} from './components'


function App() {
  return (
    <div className="App">
<Heading/>
<Container/>
<Content/>
<Projects/>
<Myjourney/>
<Build/>

<Contact/>
<Footer/>
    </div>
  );
}

export default App;
