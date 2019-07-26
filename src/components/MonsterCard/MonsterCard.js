import React from "react";
import './MonsterCard.scss'

class MonsterCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            monster: {
                name: '',
            }
        }
    }

    render() {
        const {name, images, description, statistics} = this.props.monster;
        const powerBarWidth = statistics ? statistics.power : "";
        const dangerBarWidth = statistics ? statistics.danger : "";
        const frequencyBarWidth = statistics ? statistics.frequency : "";

        return (
            <div className={'cardContainer'}>
                <h1>{name}</h1>

                <div className={'infoContainer'}>
                    <img src={images ? images.big : ""} alt=''/>
                    <p>{description}</p>
                </div>
                <div className={'statsContainer'}>

                    <div className='statsData'>Power:
                        <div style={{border: '1px solid mediumaquamarine', height: '20px', borderRadius: '6px',}}>

                            <div style={{
                                width: powerBarWidth * 100 + '%',
                                backgroundColor: 'mediumaquamarine',
                                borderRadius: '5px',
                                height: '18px'
                            }}>
                            </div>

                        </div>
                        {statistics ? statistics.power : ""}
                    </div>
                    <div className='statsData'>Danger:
                        <div style={{border: '1px solid mediumaquamarine', height: '20px', borderRadius: '6px',}}>

                            <div style={{
                                width: dangerBarWidth * 100 + '%',
                                backgroundColor: 'mediumaquamarine',
                                borderRadius: '5px',
                                height: '18px'
                            }}>
                            </div>

                        </div>
                        {statistics ? statistics.danger : ""}
                    </div>

                    <div className='statsData'>Frequency:
                        <div style={{border: '1px solid mediumaquamarine', height: '20px', borderRadius: '6px',}}>

                            <div style={{
                                width: frequencyBarWidth * 100 + '%',
                                backgroundColor: 'mediumaquamarine',
                                borderRadius: '5px',
                                height: '18px'
                            }}>
                            </div>

                        </div>
                        {statistics ? statistics.frequency : ""} </div>

                </div>
            </div>
        )
    }
}

export default MonsterCard;