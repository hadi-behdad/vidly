const SideBar = (props) => {
  const { items, selectedItem, itemProperty, onItemSelect } = props;
  return (
    <ul className="list-group" style={{ cursor: "pointer" }}>
      {items.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => onItemSelect(item)}
            className={
              selectedItem === item[itemProperty]
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[itemProperty]}
          </li>
        );
      })}
    </ul>
  );
};

SideBar.defaultProps = {
  itemProperty: "name",
};

export default SideBar;
