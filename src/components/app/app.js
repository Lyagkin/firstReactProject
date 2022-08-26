import { Component } from "react";

import AppInfo from "../app-info/app-info";
import AppSearchPanel from "../app-search-panel/app-search-panel";
import AppFilter from "../app-filter/app-filter";
import AppEmployeesList from "../app-employees-list/app-employees-list";
import AppEmployeesAddForm from "../app-employees-add-form/app-employees-add-form";
import nextId from "react-id-generator";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Blinya Petushkina", salary: 10000, increase: false, promotion: true, id: 1 },
        { name: "Victor Kolyagkin", salary: 500, increase: true, promotion: false, id: 2 },
        { name: "Igor Penchuk", salary: 5000, increase: false, promotion: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  newEmployees = (name, salary) => {
    const newEmloyees = {
      name,
      salary,
      increase: false,
      promotion: false,
      id: nextId(),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newEmloyees];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  seacrhEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "promotion":
        return items.filter((item) => item.promotion === true);
      case "salary":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = data.length;
    const increased = data.filter((item) => item.increase === true).length;
    const visibleData = this.filterPost(this.seacrhEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo title={() => "Blinchik&Co"} employees={employees} increased={increased} />

        <div className="app-search-panel">
          <AppSearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter} />
        </div>

        <AppEmployeesList data={visibleData} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} />

        <AppEmployeesAddForm onAdd={this.newEmployees} />
      </div>
    );
  }
}

export default App;
