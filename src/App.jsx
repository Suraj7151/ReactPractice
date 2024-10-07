import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import Button from './Button.jsx';
import Counter from './Counter.jsx';
import Form from "./Form";
import ColorPicker from "./ColorPicker";
import UpdateObjects from './UpdateObjects.jsx';
import ToDoList from './ToDoList.jsx';
import UpdateArray from './UpdateArray.jsx';
import DigitalClock from './DigitalClock.jsx';

import ComponentA from "./CoponentA";
import Stopwatch from "./StopWatch";

import UseEffect from './UseEffect.jsx';
function App() {
  const fruits =[
    {id:1, name:"apple", calories:65},
    {id:2, name:"orange", calories:35},
    {id:3, name:"coconut", calories:105},
    {id:4, name:"banana", calories:75},
]
  return(
    <>
      <Header/>
      <Card/>
      <Student name="Suraj" age={24} isStudent={true}/>
      <UserGreeting isLoggedIn={true} username="Suraj"/>
      <List items={fruits} category="Fruits"/>
      <Button/>
      <Food/>
      <Footer/>
      <Form/>
      <ColorPicker/>
      <Counter/>
      <UpdateObjects/>
      <UpdateArray/>
      <ToDoList/>
      <UseEffect/>
      <DigitalClock/>
      <ComponentA/>
      <Stopwatch/>
    </>
  );
}

export default App
