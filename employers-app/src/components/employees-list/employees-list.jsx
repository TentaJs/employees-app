import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToogleProp}) => {

    const elements = data.map((item) => {
        const {id, ...itemProps} = item
        return (<EmployeesListItem key={id}
                                   {...itemProps}
                                   onDelete ={() => onDelete(id)}
                                   onToogleProp ={(e) => onToogleProp(id, e.target.getAttribute('data-toogle') )}
        />)
    })

    return (<ul className="app-list list-group">
            {elements}
        </ul>)
}

export default EmployeesList;