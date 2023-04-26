import {Component} from "react";
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            favorites : false
        }
    }
    onIncrease = () =>{
        this.setState(({increase}) => ({
            increase : !increase
        }))
    }
    onFavorites = () =>{
        this.setState(({favorites}) => ({
            favorites : !favorites
        }))
    }

    render() {
        const {name, salary} = this.props
        const {increase,favorites} = this.state

        let classNames = "list-group-item d-flex justify-content-between"
        if (increase === true) {
            classNames = "list-group-item d-flex justify-content-between increase"
        }
        if (favorites === true){
            classNames += " like"
        }
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onFavorites}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            onClick={this.onIncrease}
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;