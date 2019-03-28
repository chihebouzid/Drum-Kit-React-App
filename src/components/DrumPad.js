import React, { Component } from 'react';

class DrumPad extends Component {
    constructor(props) {
        super(props);

        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);

    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);

    }
    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
            this.props.display(this.props.soundName);
        }
    }

    keyAnimation() {
        const key = document.getElementById(this.props.soundName);
        console.log(key);
        key.classList.add('playing');
        setTimeout(function () {
            key.classList.remove('playing')
        }, 90);
    }



    playSound() {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.props.display(this.props.soundName);
        this.keyAnimation();
    }



    render() {

        return (
            <div id="drum-pad-container">

                <div id={this.props.soundName}
                    className="drum-pad"
                    onClick={this.playSound}>

                    <audio className='clip'
                        id={this.props.keyTrigger}
                        src={this.props.src}

                    ></audio>

                    {this.props.keyTrigger}</div>

            </div>
        )

    }
}

export default DrumPad;