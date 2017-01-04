import React, { Component } from 'react';
import Name from './Name';
import Image from './Image';
import Homeworld from './Homeworld';
import Status from './Status';

class About extends Component {
  constructor(){
    super();
      this.whiteRangerProps = this.whiteRangerProps.bind(this);
      this.redRangerProps = this.redRangerProps.bind(this);
      this.blueRangerProps = this.blueRangerProps.bind(this);
    this.state = {
      whiteRangerName: '',
      whiteRangerImage: 'http://vignette3.wikia.nocookie.net/p__/images/7/7b/Tommyback.jpg/revision/latest?cb=20100828003518&path-prefix=protagonist',
      whiteRangerHomeworld: '',
      whiteRangerStatus: '',
      redRangerName: '',
      redRangerImage: 'https://s-media-cache-ak0.pinimg.com/736x/9d/30/44/9d3044967a07a36413b05f11a3c0a58c.jpg',
      redRangerHomeworld: '',
      redRangerStatus: '',
      blueRangerName: '',
      blueRangerImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/BillyCranston.jpg/220px-BillyCranston.jpg',
      blueRangerHomeworld: '',
      blueRangerStatus: '',
    }
   }
   whiteRangerProps(){
    this.setState({
      whiteRangerName: 'Tommy Oliver',
      whiteRangerImage: 'http://vignette3.wikia.nocookie.net/p__/images/7/7b/Tommyback.jpg/revision/latest?cb=20100828003518&path-prefix=protagonist',
      whiteRangerHomeworld: 'Earth',
      whiteRangerStatus: 'Martial Artist',
    })
   }
   redRangerProps(){
    this.setState({
      redRangerName: 'Jason Lee Scott',
      redRangerImage: 'https://s-media-cache-ak0.pinimg.com/736x/9d/30/44/9d3044967a07a36413b05f11a3c0a58c.jpg',
      redRangerHomeworld: 'Earth',
      redRangerStatus: 'Martial Artist',
    })
   }
    blueRangerProps(){
    this.setState({
      blueRangerName: 'Billy Cranston',
      blueRangerImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/BillyCranston.jpg/220px-BillyCranston.jpg',
      blueRangerHomeworld: 'Earth',
      blueRangerStatus: 'Engineer',
    })
   }

  render() {
    return (
      <div>
        <Name
         whiteRangerName={this.state.whiteRangerName}
         redRangerName={this.state.redRangerName}
         blueRangerName={this.state.blueRangerName}
          />
        <Image
         whiteRangerImage={this.state.whiteRangerImage}
         redRangerImage={this.state.redRangerImage}
         blueRangerImage={this.state.blueRangerImage}
          />
        {/*<Homeworld
         whiteRangerHomeworld={this.state.whiteRangerHomeworld}
         redRangerHomeworld={this.state.redRangerHomeworld}
         blueRangerHomeworld={this.state.blueRangerHomeworld}
          />
        <Status
         whiteRangerStatus={this.state.whiteRangerStatus}
         redRangerStatus={this.state.redRangerStatus}
         blueRangerStatus={this.state.blueRangerStatus}
          />*/}
      </div>
    );
  }
}

export default About;
