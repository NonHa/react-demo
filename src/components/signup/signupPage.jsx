import React from 'react'
import SignForm from './signForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../actions/signupActions'
import * as flashACtions from '../../actions/flashMessages'
class SignupPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignForm signupActions={ this.props.signupActions } flashACtions={ this.props.flashACtions}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signupActions: bindActionCreators(signupActions, dispatch),
        flashACtions: bindActionCreators(flashACtions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(SignupPage)