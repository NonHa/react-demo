import React from 'react'
import { Link } from 'react-router-dom'
export default class NavGationBar extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills container">
                    <li role="presentation" className="active">
                        <Link className="navbar-brand" to="/">Login功能</Link>    
                    </li>
                    <li role="presentation">
                        <Link className="nav-link" to="/signup">注册</Link>    
                    </li>
                    <li role="presentation">
                        <Link className="nav-link" to="/">登录</Link>    
                    </li>
                </ul>
            </div>
        )
    }
}