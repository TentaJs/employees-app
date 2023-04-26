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
        this.maxId = 4;
    }
    deleteItem = (id) =>{
        this.setState(({data}) =>{
            return {
                data : data.filter(elem => elem.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
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
                <EmployeesAddForm onAdd={this.addItem}
                />
            </div>
        )
    }
}

export default App