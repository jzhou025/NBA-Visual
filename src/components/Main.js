import React from 'react';
import { DataViewContainer } from './DataViewContainer';
import { Profile } from './Profile';
import { SearchBar } from './SearchBar';
import nba from 'nba';

export class Main extends React.Component {
  state = {
    playerInfo: {
        playerId: 201939,
    },
  }
  componentDidMount() {
    nba.stats.playerInfo({ PlayerID: this.state.playerId })
      .then((info) => {
        const playerInfo = Object.assign({}, 
          info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
        console.log("final player info", playerInfo);
        this.setState({ playerInfo });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  loadPlayerInfo = () => {
      
  }

  render() {
    return (
        <div className="main">
        <SearchBar />
        <div className="player">
            <Profile playerInfo={this.state.playerInfo} />
            <DataViewContainer playerId={this.state.playerInfo.playerId} />
        </div>
    </div>
    );
  }
}