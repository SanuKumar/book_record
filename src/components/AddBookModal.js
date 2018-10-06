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
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			title: '',
			author: '',
			isRead: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle = () => {
    	this.setState({
     		 modal: !this.state.modal
    	});
	}

	//function for updateTitle
	updateTitle = (e) => {
		this.setState({
			title: e.target.value
		});
	}

	//function to chageAuthor
	updateAuthor = (e) => {
		this.setState({
			author: e.target.value
		});
	}

	//function for read
	updateStatus = (e) => {
		this.setState({
			isRead: e.target.checked
		});
	}

	//function for submit
	submit = () => {
		this.props.addBook(this.state);
		this.setState({
			modal: false,
			title: "",
			author: "",
			isRead: false
		});
	}

	//function to reset
	reset = (e) => {
		this.setState({
			title: "",
			author: "",
			isRead: false
		});
	}

	//calling newbbok function forn App.js
	addBook = () => {
		// this.state = {};
		this.props.addBook(this.state);
	}


	render() {
		return (
			<div>
				<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Add Book</Button>
		        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
		          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
		          <ModalBody>
		            <form>

		            	<Label for="exampleTitle">Title</Label>
         				<Input type="title" name="title" value={this.state.title} placeholder="Enter Title" onChange={this.updateTitle} />

         				<Label for="exampleAuthor">Author</Label>
         				<Input type="author" name="author" value={this.state.author} placeholder="Enter Author" onChange={this.updateAuthor} />

         				<FormGroup check>
				          <Label check>
				            <Input type="checkbox" checked={this.state.isRead} onChange={this.updateStatus}/>{' '}
				            Read
				          </Label>
				        </FormGroup>
			            	<Button color="primary"onClick={this.submit}>Submit</Button>{' '}
			            	<Button color="danger" onClick={this.reset}>Reset</Button>{' '}

		            </form>
		          </ModalBody>
		        </Modal>
			</div>
		)
	}
}

 export default AddBookModal;	