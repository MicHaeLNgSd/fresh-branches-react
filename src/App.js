import './App.css';
import Greetings from './components/Greetings';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Phone from './components/Phone';

function App(props) {
  // props.state = {

  // };

  // phones: [
  //   { id: 0, color: 'black', price: 789456 },
  //   { id: 1, color: 'black', price: 456879 },
  // ];
  // const listOfPhones = phones.map((p) => <Phone color={p.color} price={p.price} />);
  return (
    <>
      {/* {listOfPhones} */}
      <Phone color="black" price="123456" />
      <Phone color="black" price="123456" />
    </>
  );
}

export default App;
