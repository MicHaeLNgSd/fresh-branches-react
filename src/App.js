import './App.css';
import Greetings from './components/Greetings';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Phone from './components/Phone';

const user1 = {
  name: 'User',
  lastName: 'Userenko',
};

const user2 = {
  name: 'Test',
  lastName: 'Testovich',
};

const user3 = {
  name: 'John',
  lastName: 'Doe',
};

function App() {
  return (
    <>
      {/* <Header />
      <Greetings user={user1} />
      <Greetings user={user2} />
      <Greetings user={user3} />
      <Paragraph text={'Parag Text'} title={'title text'} /> */}
      <Phone color="black" price="123456" />
    </>
  );
}

export default App;
