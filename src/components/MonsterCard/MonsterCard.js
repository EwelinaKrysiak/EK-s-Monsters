import React from "react";
import './MonsterCard.scss'

// import StatsData from '../StatsData/StatsData'

class MonsterCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            monster: {
                name: '',
            }
        }
    }

    render() {
        const {error, isLoaded} = this.state;
        const {name, images, description, statistics} = this.props.monster;
        const powerBarWidth = statistics ? statistics.power : "";
        const dangerBarWidth = statistics ? statistics.danger : "";
        const frequencyBarWidth = statistics ? statistics.frequency : "";

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='cardContainer'>
                    <h1>{name}</h1>

                    <div className='infoContainer'>
                        <img src={images ? images.big : ""} alt=''/>
                        <p>{description}</p>
                    </div>

                    {/*<StatsData />*/}

                    <div className='statsContainer'>
                        <div className='statsData'>Power:
                            <div className='progressBar'>

                                <div className='progressBarValue' style={{
                                    width: powerBarWidth * 100 + '%',
                                }}>
                                </div>

                            </div>

                            {statistics ? statistics.power : ""}

                        </div>
                        <div className='statsData'>Danger:
                            <div className='progressBar'>

                                <div className='progressBarValue' style={{
                                    width: dangerBarWidth * 100 + '%',
                                }}>
                                </div>

                            </div>

                            {statistics ? statistics.danger : ""}

                        </div>

                        <div className='statsData'>Frequency:
                            <div className='progressBar'>

                                <div className='progressBarValue' style={{
                                    width: frequencyBarWidth * 100 + '%',
                                }}>
                                </div>

                            </div>

                            {statistics ? statistics.frequency : ""} </div>

                    </div>
                </div>
            )
        }
    }
}

export default MonsterCard;