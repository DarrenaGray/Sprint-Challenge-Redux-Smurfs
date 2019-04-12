import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from './../actions';

import SmurfForm from './SmurfForm';

class SmurfList extends React.Component {
    componentDidMount() {
      console.log('Mounting smurf list...')
      this.props.getSmurfs();
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

export default connect(mapStateToProps, { getSmurfs } )(SmurfList);