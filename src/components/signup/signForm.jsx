import React from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
class SignForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state);
        this.setState({ errors: {}, isLoading: true})
        this.props.signupActions.userSignupRequest(this.state)
        .then(
            () => {
                // 添加数据到redux
                this.props.flashACtions.addFlashMessage({
                    type: "success",
                    text: "注册成功，欢迎加入！"
                })
                this.props.history.push('/')
            },
            ({ response }) => { this.setState({ errors: response.data, isLoading: false})}
        )
    }
    render() {
        const { errors, isLoading } = this.state;
        return(
            <form onSubmit={ this.onSubmit}>
                <h1>Join Our Team</h1>
                <div className="form-group">
                    <label  className="control-label">Username</label>
                    <input type="text" name="username"  value={ this.state.username }
                    className={ classnames('form-control',{ 'is-invalid': errors.username})}
                    onChange={ this.onChange } />
        { errors.username && <span className="form-text text-muted">{ errors.username }</span>}
                </div> 
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input type="email" name="email"  value={ this.state.email } 
                    className={ classnames('form-control',{ 'is-invalid': errors.email})}
                    onChange={ this.onChange } />
        { errors.email && <span className="form-text text-muted">{ errors.email }</span>}
                </div> 
                <div className="form-group">
                    <label className="control-label">password</label>
                    <input type="password" name="password"  value={ this.state.password } 
                    className={ classnames('form-control',{ 'is-invalid': errors.password})}
                    onChange={ this.onChange }  />
        { errors.password && <span className="form-text text-muted">{ errors.password }</span>}
                </div> 
                <div className="form-group">
                    <label className="control-label">passwordConfirmation</label>
                    <input type="password" name="passwordConfirmation"  value={ this.state.passwordConfirmation } 
                    className={ classnames('form-control',{ 'is-invalid': errors.passwordConfirmation})}
                    onChange={ this.onChange }  />
        { errors.passwordConfirmation && <span className="form-text text-muted">{ errors.passwordConfirmation }</span>}
                </div> 
                <div className="form-group">
                   <button disabled={ isLoading } className="btn btn-primary">注册</button>
                </div> 
            </form>
        )
    }
}

export default  withRouter(SignForm)