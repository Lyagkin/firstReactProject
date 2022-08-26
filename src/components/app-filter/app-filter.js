import "./app-filter.css";

const AppFilter = ({ filter, onUpdateFilter }) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники", colored: false },
    { name: "promotion", label: "На повышение", colored: false },
    { name: "salary", label: "З/П больше 1000", colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    const color = colored ? { color: "#e09f3e" } : null;
    return (
      <button type="button" className={`btn ${clazz}`} key={name} onClick={() => onUpdateFilter(name)} style={color}>
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
