import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники", colored: false },
    { name: "promotion", label: "На повышение", colored: false },
    { name: "salary", label: "З/П больше 1000", colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    const color = colored ? { color: "red" } : null;
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onUpdateFilter(name)}
        style={color}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
