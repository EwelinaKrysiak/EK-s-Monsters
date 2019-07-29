import React from "react";
import MonsterCard from "../MonsterCard/MonsterCard";
import './MonsterList.scss'

class MonstersId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            monster: {
                name: ''
            }
        }
    }

    getMonsters() {
        fetch(`http://localhost:8080/api/v1/monsters`)
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        data: res.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    getMonster(slug) {
        fetch(`http://localhost:8080/api/v1/monster/${slug}`)
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        monster: res.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.getMonsters()
    }

    render() {
        const {error, isLoaded, data} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    <div className='listContainer'>
                        {data.map(data => (<img onClick={() => {
                            this.getMonster(data.slug)
                        }} src={data.images.thumb} alt={data.images.thumb} key={data.name} className={'elImg'}/>))}
                    </div>
                    <MonsterCard monster={this.state.monster}/>
                </>
            )
        }
    }

}

export default MonstersId;