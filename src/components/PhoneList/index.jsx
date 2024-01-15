import React from 'react';
import Phone from '../Phone';

class PhoneList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirectSortOrder: true,
      phones: [
        {
          id: 0,
          color: 'black',
          price: 15999.99,
          isFavorite: false,
        },
        {
          id: 1,
          color: 'white',
          price: 9999.99,
          isFavorite: false,
        },
        {
          id: 2,
          color: 'gold',
          price: 59999.99,
          isFavorite: false,
        },
      ],
    };
  }

  toggleSortOrder = () => {
    /*
      1. взяти масив зі стейту
      2. перевернути його
      3. оновити стан, не забути змінити змінну яка стежить за порядком масиву
    */

    const { phones, isDirectSortOrder } = this.state;
    const phonesCopy = structuredClone(phones);
    phonesCopy.reverse();
    this.setState({
      isDirectSortOrder: !isDirectSortOrder,
      phones: phonesCopy,
    });
  };

  toggleFavorite = (id) => {
    const { phones } = this.state;
    const newPhones = phones.map((p) =>
      id !== p.id ? p : { ...p, isFavorite: !p.isFavorite }
    );
    this.setState({ phones: newPhones });
  };

  render() {
    const { phones, isDirectSortOrder } = this.state;
    // Верхньому елементу / компоненту який ви повертаєте з мапи
    // НЕОБХІДНО вказати унікальний для цього списка службовий проп
    // key
    const phonesComponents = phones.map((p) => (
      <Phone key={p.id} phone={p} toggleFavorite={this.toggleFavorite} />
    ));

    return (
      <>
        <button onClick={this.toggleSortOrder}>Reverse sort order</button>
        <p>Current sort order is: {isDirectSortOrder ? 'direct' : 'reversed'}</p>
        <ul>{phonesComponents}</ul>
      </>
    );
  }
}

export default PhoneList;
