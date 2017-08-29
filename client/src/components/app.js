import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './header'
import { fetchUser } from '../actions'

const DashBoard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
    componentDidMount(){ 
        this.props.fetchUser()
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={Landing} />
                        <Route path="/surveys" exact component={DashBoard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchUser
}

export default connect(null, mapDispatchToProps)(App);