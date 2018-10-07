import React, { Component } from 'react';
import { 
	Button,
    Modal, 
    ModalHeader, 
    ModalBody,
    FormGroup,
    Label,
    Input
 } from 'reactstrap';

class AddBookModal extends Component {
	// constructor(props) {
	// 	super(props);
	// 	// this.state = {
	// 	// 	// modal: false,
	// 	// 	title: "",
	// 	// 	author: "",
	// 	// 	isRead: false
	// 	// };
	// }

	updateTitle = (e) => {
		this.props.updateTitle(e.target.value);
	}

	updateAuthor = (e) => {
		this.props.updateAuthor(e.target.value);
	}

	updateStatus = (e) => {
		this.props.updateStatus(e.target.checked);
	}

	//function for submit
	submit = () => {
		if (this.props.isUpdating) {
			return this.props.updateBookFromModal(this.props.book);
		}
		this.props.addBook(this.props.book);
	}

	reset = (e) => {
		if (this.props.isUpdating) {
			return this.props.toggle(null, false);
		}
		this.props.reset();
	}

	// calling newbook function forn App.js
	// addBook = () => {
	// 	 this.state = {};
	// 	 this.props.addBook(this.state);
		
	// }

	// static getDerivedStateFromProps(props, state) {
	// 	console.log(props);
	// 	return {
	// 			title: props.selectedBook.title,
	// 			author: props.selectedBook.author,
	// 			isRead: props.selectedBook.isRead
	// 		}
	// }


	render() {
		return (
			<div>
				
		        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
		          <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
		          <ModalBody>
		            <form>

		            	<Label for="exampleTitle">Title</Label>
         				<Input type="title" name="title" value={this.props.book.title} placeholder="Enter Title" onChange={this.updateTitle} />

         				<Label for="exampleAuthor">Author</Label>
         				<Input type="author" name="author" value={this.props.book.author} placeholder="Enter Author" onChange={this.updateAuthor} />

         				<FormGroup check>
				          <Label check>
				            <Input type="checkbox" checked={this.props.book.isRead} onChange={this.updateStatus}/>{' '}
				            Read
				          </Label>
				        </FormGroup>
			            	<Button color="primary"onClick={this.submit}>
			            		{
			            			this.props.isUpdating ? 'Update' : 'Submit'
			            		}
		            		</Button>{' '}
			            	<Button color="danger" onClick={this.reset}>
			            		{
			            		this.props.isUpdating ? 'Cancel' : 'Reset'
			            		}
		            		</Button>{' '}

		            </form>
		          </ModalBody>
		        </Modal>
			</div>
		)
	}
}

 export default AddBookModal;	