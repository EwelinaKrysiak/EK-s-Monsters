import React from "react";


class StatsData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            monster: {
                statistics: {},
            }

        }
    }


    render() {

        const {statistics} = this.props;

        const powerBarWidth = this.props.statistics ? this.props.statistics.power : "";
        const dangerBarWidth = this.props.statistics ? this.props.statistics.danger : "";
        const frequencyBarWidth = this.props.statistics ? this.props.statistics.frequency : "";

        return (
            <>
                <div className='statsContainer'>
                    <div className='statsData'>Power:
                        <div className='progressBar'>

                            <div className='progressBarValue' style={{
                                width: powerBarWidth * 100 + '%',
                            }}>
                            </div>

                        </div>

                        {powerBarWidth}

                    </div>
                    <div className='statsData'>Danger:
                        <div className='progressBar'>

                            <div className='progressBarValue' style={{
                                width: dangerBarWidth * 100 + '%',
                            }}>
                            </div>

                        </div>

                        {dangerBarWidth}

                    </div>

                    <div className='statsData'>Frequency:
                        <div className='progressBar'>

                            <div className='progressBarValue' style={{
                                width: frequencyBarWidth * 100 + '%',
                            }}>
                            </div>

                        </div>

                        {frequencyBarWidth} </div>

                </div>

            </>
        )
    }

}

export default StatsData;