import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from './../actions';

class SmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addSmurf = e => {
        console.log('Smurf added:', this.props.smurfs)
        e.preventDefault();
        const newSmurf ={
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.addSmurf(newSmurf);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addSmurf}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <input 
                        type="number"
                        name="age"
                        placeholder="Age"
                        onChange={this.handleChange}
                        value={this.state.age}
                    />
                    <input 
                        type="text"
                        name="height"
                        placeholder="Height"
                        onChange={this.handleChange}
                        value={this.state.height}
                    />
                    <button type="submit">Add Smurf</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addSmurf })(SmurfForm);