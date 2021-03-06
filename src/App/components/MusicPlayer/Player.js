import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';


class Player extends Component {
    render() {
        return <div className="player">
            <ReactAudioPlayer
                src={this.props.player.src}
                autoPlay
                controls
                />       

        </div>
    }
}


const mapStateToProps = (state/*, otherProps */) => {
    return {
        ...state,
    }
}
    
export default connect(
    mapStateToProps,
    () => ({}),
)(Player);