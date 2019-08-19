import React from 'react';

class Fruit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          editable: false
        }
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit() {
        const { editable } = this.state;
        const { fruit, handleUpdate } = this.props;
        const { name, description } = this;
        if(editable){
            const _fruit = {
                id: fruit.id, 
                name: name.value,
                description: description.value
            }
            handleUpdate(_fruit);
        }
        this.setState({
            editable: !editable
        })
    }
    render() {
        const { fruit, handleDelete } = this.props;
        const { editable } = this.state;
        const { handleEdit } = this;

        const name = editable 
            ? <input type='text' ref={input => this.name = input} defaultValue={fruit.name}/>
            : <h3>{fruit.name}</h3>
        const description = editable 
            ? <input type='text' ref={input => this.description = input} defaultValue={fruit.description}/>
            :<p>{fruit.description}</p>
        return(
            <div>
                {name}
                {description}
                <button onClick={() => handleEdit()}>{editable ? 'Submit' : 'Edit'}</button>
                <button onClick={() => handleDelete(fruit.id)}>Delete</button>
            </div>
        )      
    }
}

export default Fruit;