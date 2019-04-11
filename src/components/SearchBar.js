import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }
    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName, playerId}) => 
                (<Option key={playerId} value={fullName}>
                    <img
                    className="player-search-image"
                    src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                    alt={fullName}
                    />
                    <span className="player-search-label">{fullName}</span>
                </Option>)
            )
        });
    }
    onSelect(value) {
        console.log('onSelect', value);
    }
    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                className="search-bar"
                size="large"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
                optionLabelProp="value"
            >
            <Input suffix={<Icon type="search" />}/>
            </AutoComplete>
        );
    }
}
