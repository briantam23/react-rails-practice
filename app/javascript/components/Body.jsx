import React from 'react';
import NewFruit from './NewFruit';
import AllFruits from './AllFruits';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fruits: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.addNewFruit = this.addNewFruit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateFruit = this.updateFruit.bind(this)
        this.handleDelete = this.handleDelete.bind(this);
        this.deleteFruit = this.deleteFruit.bind(this);
    }
    componentDidMount() {
        fetch('/api/v1/fruits.json')
          .then(res => res.json())
          .then(data => this.setState({ fruits: data }));
    }
    handleFormSubmit(name, description) {
      const body = JSON.stringify({ 
        fruit: { 
          name, 
          description
        } 
      })
      fetch('http://localhost:3000/api/v1/fruits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
        })
        .then(res => res.json())
        .then(fruit => this.addNewFruit(fruit))
    }
    addNewFruit(fruit) {
      this.setState({
        fruits: this.state.fruits.concat(fruit)
      })
    }
    handleUpdate(fruit) {
      fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`, 
      {
        method: 'PUT',
        body: JSON.stringify({ fruit: fruit }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => this.updateFruit(fruit))
    }
    updateFruit(fruit) {
      const newFruits = this.state.fruits.filter(f => f.id !== fruit.id);
      newFruits.push(fruit);
      this.setState({
        fruits: newFruits
      })
    }
    handleDelete(id) {
      fetch(`http://localhost:3000/api/v1/fruits/${id}`, 
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => this.deleteFruit(id));
    }
    deleteFruit(id) {
      const newFruits = this.state.fruits.filter(fruit => fruit.id !== id);
      this.setState({
        fruits: newFruits
      })
    }
    render() {
      const { handleFormSubmit, handleUpdate, handleDelete } = this;
      const { fruits } = this.state;
      return(
        <div>
          <NewFruit handleFormSubmit={handleFormSubmit}/>
          <AllFruits fruits={fruits} handleUpdate={handleUpdate} handleDelete={handleDelete} />
        </div>
      )
    }
}