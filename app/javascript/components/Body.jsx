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
    }
    componentDidMount() {
        fetch('/api/v1/fruits.json')
          .then(res => res.json())
          .then(data => this.setState({ fruits: data }));
    }
    handleFormSubmit(name, description) {
      let body = JSON.stringify({ 
        fruit: { 
          name: name, 
          description: description 
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
        .then(fruit => {
          this.addNewFruit(fruit)
        })
    }
    addNewFruit(fruit) {
      this.setState({
        fruits: this.state.fruits.concat(fruit)
      })
    }
    render() {
        return(
          <div>
            <NewFruit handleFormSubmit={this.handleFormSubmit}/>
            <AllFruits fruits={this.state.fruits} />
          </div>
        )
    }
}