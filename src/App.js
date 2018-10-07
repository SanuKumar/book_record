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
      modal: false,
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
      ],
      book: {
        title: "",
        author: "",
        isRead: false
      },
      isUpdating: false,
    }
  }


//function to create new book
  addBook = (newBook) => {
      var books = JSON.parse(JSON.stringify(this.state.books));
      // books.unshift(newBook);
      books.push(newBook);
      this.setState({
        modal: !this.state.modal,
        books:books,
        book: {
          title: '',
          author: '',
          isRead: '',
        },
    });
  }

  toggle = (e, isUpdating) => {
      // debugger;
      // var isUpdating = typeof(isUpdating) !== 'undefinded' ? isUpdating : this.state.isUpdating;
      this.setState({
         modal: !this.state.modal,
         isUpdating,
      });
    }

//function to delete book
  deleteBook(i) {
    var books = JSON.parse(JSON.stringify(this.state.books));
    books.splice(i, 1);
      this.setState({
        books, //if key and values are same, we can just use key
      });
  }

  //function to update
  updateBook(val, index) {
    // var books = JSON.parse(JSON.stringify(this.state.books));
    this.setState({
      book: {
        ...val,
        index
      },
      modal: !this.state.modal,
      isUpdating: true,
    });
  }


//function to update title
  updateTitle = (title) => {
    var book = Object.assign({},this.state.book);
    book.title = title;
    this.setState({book:book})
  }


//function to update Author
  updateAuthor = (author) => {
    var book = Object.assign({},this.state.book);
    book.author = author;
    this.setState({book:book})
  }


//function to udpate status
  updateStatus = (isRead) => {
    var book = Object.assign({},this.state.book);
    book.isRead = isRead;
    this.setState({book:book})
  }

  reset = () => {
    this.setState({
      book: {
        title: '',
        author: '',
        isRead: false,
      }
    })
  }

  updateBookFromModal = (book) => {
    var books = JSON.parse(JSON.stringify(this.state.books));
    books[book.index] = {
      title: book.title,
      author: book.author,
      isRead: book.isRead,
    };

    this.setState({
      books,
      book: {
        title: '',
        author: '',
        isRead: false,
      },
      modal: !this.state.modal,
      isUpdating: false,
    })

  }

  render() {
    
    return (
      <div className="App">
        <h1>Books <Badge color="secondary"></Badge></h1>

        <Alert color="primary">
          Book updated!
        </Alert>

        <Button color="danger" onClick={this.toggle}>Add Book</Button>

          <AddBookModal
            isOpen = {this.state.modal}
            toggle = {this.toggle}
            addBook={this.addBook}
            reset={this.reset}
            book={this.state.book}
            updateTitle={this.updateTitle}
            updateAuthor={this.updateAuthor}
            updateStatus={this.updateStatus}
            isUpdating={this.state.isUpdating}
            updateBookFromModal={this.updateBookFromModal}
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
            this.state.books.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.title}</td>
                  <td>{val.author}</td>
                  <td>{val.isRead 
                    ? 'Yes' : 'No'}</td>
                  <td>
                    <Button color="warning" onClick={() => {this.updateBook(val, index)}}>Update</Button>{' '}
                  </td>
                  <td>
                    <Button color="danger" onClick={() => {this.deleteBook(index)}}>Delete</Button>{' '}
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
