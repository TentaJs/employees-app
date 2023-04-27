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
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: "",
            filterBtn : ""
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            rise: false,
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
    onToogleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }
    onUpdateSearch = (term) =>{
        this.setState({term})
    }

    searchEmp = (items, term) =>{
        if (term.length === 0){
            return items
        }
        return items.filter(item =>{
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateFilter = (filterBtn) =>{
        this.setState({filterBtn})
    }
    filterItems = (items, filterBtn) =>{
        if (filterBtn === 'For promotion'){
            return items.filter(item => item.rise)
        }
        if (filterBtn === "Salary over $1,000"){
            return items.filter(item => item.salary >= 1000)
        }
        return items
    }

    render() {
        const {data, term, filterBtn} = this.state
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterItems(this.searchEmp(data,term),filterBtn)
        return (
            <div className={'app'}>
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter = {this.onUpdateFilter}/>
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToogleProp={this.onToogleProp}
                />
                <EmployeesAddForm onAdd={this.addItem}
                />
            </div>
        )
    }
}

export default App