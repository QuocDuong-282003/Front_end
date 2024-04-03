import React, { Component } from 'react';

import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';



class HomeFooter extends Component {

    render() {


        return (
            <div className="home-footer">
                <p>&copy; 2023 Học IT with Quốc Dương .More information,visit my youtube channel.
                    <a target="_blank" href="https://www.youtube.com/watch?v=SDtGc-D5a4E"> &#8594;
                        Click here &#8592;
                    </a>
                </p>
            </div >
        );

    }

}

const mapStateToProps = state => {
    return {
        // cài đặt ngôn ngữ
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
