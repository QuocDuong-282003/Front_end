import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import HomePage from './HomePage/HomePage.js';
import { path } from '../utils'
import Home from '../routes/Home';
import Login from './Auth/Login';
import System from '../routes/System';

import { CustomToastCloseButton } from '../components/CustomToast';
import CustomScrollbars from '../components/CustomScrollbars.js';
import DetailDoctor from './Patient/Doctor/DetailDoctor.js';
import Doctor from '../routes/Doctor.js';
import VerifyEmail from './Patient/VerifyEmail.js';
import DetailSpecialty from './Patient/Specialty/DetailSpecialty.js';
import DetailClinic from './Patient/Clinic/DetailClinic.js';
import DetailHanBook from './Patient/Handbook/DetailHanBook.js';
import DetailFooter from './Patient/Footer/DetailFooter.js';
import DetailTermsofUse from './Patient/Footer/DetailTermsofUse.js';
import DetailQuestion from './Patient/Footer/DetailQuestion.js';
import BookingCare from './Patient/Footer/QuestionFooter/BookingCare.js';
import UserManual from './Patient/Footer/QuestionFooter/UserManual.js';
import AboutDoctor from './Patient/Footer/QuestionFooter/AboutDoctor.js';
import MedicalFacilities from './Patient/Footer/QuestionFooter/MedicalFacilities.js';
import AboutMedicalFacility from './Patient/Footer/QuestionFooter/AboutMedicalFacility.js';
import AboutInsurance from './Patient/Footer/QuestionFooter/AboutInsurance.js';
import QuestionAnswers from './Patient/Footer/QuestionFooter/QuestionAnswers.js';
import HealthRecords from './Patient/Footer/QuestionFooter/HealthRecords.js';
import CustomerBenefits from './Patient/Footer/QuestionFooter/CustomerBenefits.js';
class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        <div className="content-container">
                            {/* slider  CustomScrollbars*/}
                            <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    <Route path={'/doctor/'} component={userIsAuthenticated(Doctor)} />


                                    <Route path={path.HOMEPAGE} component={(HomePage)} />
                                    <Route path={path.DETAIL_DOCTOR} component={DetailDoctor} />
                                    <Route path={path.DETAIL_SPECIALTY} component={DetailSpecialty} />
                                    <Route path={path.DETAIL_CLINIC} component={DetailClinic} />
                                    <Route path={path.DETAIL_CLINIC} component={DetailClinic} />
                                    <Route path={path.HAND_BOOK} component={DetailHanBook} />
                                    <Route path={path.DETAIL_FOOTER} component={DetailFooter} />
                                    <Route path={path.DETAIL_TERMS_OF_USE} component={DetailTermsofUse} />
                                    <Route path={path.DETAIL_QUESTION} component={DetailQuestion} />
                                    {/* child  */}
                                    <Route path={path.BOOKING_CARE} component={BookingCare} />
                                    <Route path={path.USER_MANUAL} component={UserManual} />
                                    <Route path={path.ABOUT_DOCTOR} component={AboutDoctor} />
                                    <Route path={path.MEDICAL_FACILITIES} component={MedicalFacilities} />
                                    <Route path={path.ABOUT_MEDICAL_FACILITIES} component={AboutMedicalFacility} />
                                    <Route path={path.ABOUT_INSURANCE} component={AboutInsurance} />
                                    <Route path={path.CUSTOMER_BENEFITS} component={CustomerBenefits} />
                                    <Route path={path.POST_SURGERY_QUESTIONS_AND_ANSWERS} component={QuestionAnswers} />
                                    <Route path={path.HEALTH_RECORDS} component={HealthRecords} />
                                    <Route path={path.VERIFY_EMAIL_BOOKING} component={VerifyEmail} />

                                </Switch>
                            </CustomScrollbars>
                        </div>

                        {/* <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        /> */}
                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover

                        />

                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);