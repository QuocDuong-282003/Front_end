import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/Admin/UserRedux';
import Header from '../containers/Header/Header';
import ManageDoctor from '../containers/System/Admin/ManageDoctor';
import ManageSpeciatly from '../containers/System/Specialty/ManageSpeciatly';
import ManageClinic from '../containers/System/Clinic/ManageClinic';
import HandBook from '../containers/System/Handbook/HandBook';
class System extends Component {
    render() {
        {/* {this.props.isLoggedIn && <Header />} */ }
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {this.props.isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/user-redux" component={UserRedux} />
                            <Route path="/system/manager-doctor" component={ManageDoctor} />
                            <Route path="/system/manage-specialty" component={ManageSpeciatly} />
                            <Route path="/system/manage-clinic" component={ManageClinic} />
                            <Route path="/system/manage-handbook" component={HandBook} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn // check if user login success
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
