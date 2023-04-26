import {Component} from "react";
import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import React from "react";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'John C.', salary: 800, id: 1},
                {name: 'Alex M.', salary: 3000, id: 2},
                {name: 'Carl W.', salary: 5000, id: 3}
            ]
        }
    }
    deleteItem = (id) =>{
        this.setState(({data}) =>{
            return {
                data : data.filter(elem => elem.id !== id)
            }
        })
    }
    render() {
        return (
            <div className={'app'}>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data}
                               onDelete={this.deleteItem}
                />
                <EmployeesAddForm/>
            </div>
        )
    }
}

export default App