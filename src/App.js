import React, { Component } from 'react';
import AddBookModal from './components/AddBookModal';
import { 
      Button, 
      Table,
      Alert,
      Badge
    } from 'reactstrap'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: 
      [
        {  
          title: "On the Road",
          author: "Jack Kerouac",
          isRead: false,
        },
        {
          title: "Harry Potter and the Philosopher's Stone",
          author: "J.K. Rowling",
          isRead: false,
        },
        {
          title: "Green Eggs and Ham",
          author: "Dr. Seuss",
          isRead: true,
        },
        {
          title: "1Q84",
          author: "Haruki Murakami",
          isRead: true,
        }
      ]
    }
  }


//function to create new book
  addBook = (newBook) => {
      var books = JSON.parse(JSON.stringify(this.state.books));
      books.unshift(newBook);
      this.setState({
        books:books
    });
  }

  render() {
    
    return (
      <div className="App">
        <h1>Books <Badge color="secondary"></Badge></h1>

        <Alert color="primary">
          Book updated!
        </Alert>

        <AddBookModal 
          addBook={this.addBook}
        />

        <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Read?</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.books.map(function(val, index) {
              return (
                <tr key={index}>
                  <td>{val.title}</td>
                  <td>{val.author}</td>
                  <td>{val.isRead 
                    ? 'Yes' : 'No'}</td>
                  <td>
                    <Button color="warning">warning</Button>{' '}
                  </td>
                  <td>
                    <Button color="danger">danger</Button>{' '}
                  </td>
                </tr>
              )
            })
           } 
        </tbody>
      </Table>
      </div>
    );
  }
}

export default App;
