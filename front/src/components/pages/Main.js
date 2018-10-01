import React, { Component } from 'react';
import "../../styles/Main.css";
import Row from "../Row";
import HeadTable from "../HeadTable";
import image1 from "../../img/test_logo_1.png";
import image2 from "../../img/test_logo_2.png";
import image3 from "../../img/test_logo_3.png";


const mobile = window.innerWidth <= 640 ||
    (window.orientation !== 0 && window.innerWidth <= 812);

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [{
                start: '01.01.18',
                end: '28.01.18',
                name: 'TradePlayZ (ZED)',
                score: '95%',
                status: 'Ongoing',
                industry: 'Gaming',
                image: image1,
                additional: {
                    website: 'http://wepowernetwork.go2cloud.org',
                    whitePaper: 'Whitepaper'
                }
            },
                {
                    start: '01.01.18',
                    end: '03.01.18',
                    name: 'EZPOS (EZT)',
                    score: '92%',
                    status: 'Closed',
                    image: image2,
                    industry: 'Marketing & Advertising',
                    additional: {}
                },
                {
                    start: '01.01.18',
                    end: '03.02.18',
                    name: 'WePower (WPR)',
                    score: '87%',
                    status: 'Ongoing',
                    image: image3,
                    industry: 'Trading',
                    additional: {
                        website: 'http://wepowernetwork.go2cloud.org',
                        whitePaper: 'Whitepaper'
                    }
                },
                {
                    start: '01.01.18',
                    end: '28.01.18',
                    name: 'TradePlayZ (ZED)',
                    score: '74%',
                    status: 'Ongoing',
                    industry: 'Gaming',
                    additional: {
                        website: 'http://wepowernetwork.go2cloud.org',
                        whitePaper: 'Whitepaper'
                    }
                },
                {
                    start: '01.01.18',
                    end: '03.01.18',
                    name: 'EZPOS (EZT)',
                    score: '70%',
                    status: 'Closed',
                    industry: 'Marketing & Advertising',
                    additional: {}
                },
                {
                    start: '',
                    end: '',
                    name: 'TradePlayZ (ZED)',
                    score: '60%',
                    status: 'Ongoing',
                    industry: 'Gaming',
                    additional: {
                        website: 'http://wepowernetwork.go2cloud.org',
                        whitePaper: 'Whitepaper'
                    }
                },
                {
                    start: '01.01.18',
                    end: '03.02.18',
                    name: 'WePower (WPR)',
                    score: '55%',
                    status: 'Ongoing',
                    industry: '',
                    additional: {
                        website: 'http://wepowernetwork.go2cloud.org',
                        whitePaper: 'Whitepaper'
                    }
                },
                {
                    start: '',
                    end: '',
                    name: 'WePower (WPR)',
                    score: '40%',
                    status: 'Ongoing',
                    industry: '',
                    additional: {
                        website: 'http://wepowernetwork.go2cloud.org',
                        whitePaper: 'Whitepaper'
                    }
                },
                {
                    start: '01.01.18',
                    end: '28.01.18',
                    name: 'TradePlayZ (ZED)',
                    score: '30%',
                    status: 'Ongoing',
                    industry: 'Gaming',
                    additional: {
                        website: 'http://wepowernetwork.go2cloud.org',
                        whitePaper: 'Whitepaper'
                    }
                },
                {
                    start: '01.01.18',
                    end: '03.01.18',
                    name: 'EZPOS (EZT)',
                    score: '20%',
                    status: 'Closed',
                    industry: 'Marketing & Advertising',
                    additional: {}
                },
                {
                    start: '01.01.18',
                    end: '03.01.18',
                    name: 'EZPOS (EZT)',
                    score: '10%',
                    status: 'Closed',
                    industry: 'Marketing & Advertising',
                    additional: {}
                },
                {
                    start: '01.01.18',
                    end: '03.01.18',
                    name: 'EZPOS (EZT)',
                    score: '3%',
                    status: 'Closed',
                    industry: 'Marketing & Advertising',
                    additional: {}
                }
            ]
        }
    }

    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
                this.setState({
                    loading: false
                })
            }, 1000)
        }
    }

    onClickColumn = () => {
        this.setState({
            loading: true
        })
    };

    render() {
        const {data, loading} = this.state;

        return (
            <div className="Main">
                {
                    !mobile &&
                    <div className="top_block">
                        <div className="caption text-upper">
                            Header text
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure
                            dolor in reprehenderit in voluptate velit esse
                        </div>
                    </div>
                }
                <div className="list_data">
                    <div className="table flex-col">
                        <HeadTable onClickColumn={() => this.onClickColumn()}/>
                        {
                            !loading ?
                                <div className="body flex-col">
                                    {
                                        data ?
                                            data.map((ico, key) => {
                                                return <Row data={ico} key={key}/>
                                            }) : null
                                    }
                                </div> :
                                <i className="fa fa-spinner fa-spin"/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Main