import AppEmployeesListItem from "../app-employees-list-item/app-employees-list-item";
import "./app-employees-list.css";

const AppEmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <AppEmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default AppEmployeesList;
