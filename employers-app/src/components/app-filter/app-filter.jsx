import {Component} from "react";


import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterBtn: ""
        }
    }

    filterItems = (e) =>{
        const filterBtn = e.target.textContent;
        this.setState({filterBtn})
        this.props.onUpdateFilter(filterBtn)
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-light"
                        onClick={this.filterItems}>
                    All employees
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        onClick={this.filterItems}>
                    For promotion
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        onClick={this.filterItems}>
                    Salary over $1,000
                </button>
            </div>
        )
    }
}

export default AppFilter;