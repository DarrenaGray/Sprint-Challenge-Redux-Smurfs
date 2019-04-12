import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from './../actions';

import SmurfForm from './SmurfForm';

class SmurfList extends React.Component {
    componentDidMount() {
      console.log('Mounting smurf list...')
      this.props.getSmurfs();
    }
    
    deleteSmurf = (id) => {
        console.log(id)
        this.props.deleteSmurf(id);
    }

    render() {
        console.log('Rendering...')
        return (
            <div>
                {this.props.smurfs.map((smurf, index) => (
                    <div key={index}>
                        <h3>{smurf.name}</h3>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                        <button onClick={() => this.deleteSmurf(smurf.id)}>Delete</button>
                    </div>
                ))}
                <SmurfForm smurfs={this.props.smurfs}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf } )(SmurfList);