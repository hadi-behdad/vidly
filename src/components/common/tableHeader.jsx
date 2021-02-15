const TableHeader = (props) => {
  const { sortColumn, onSort, columns } = props;

  const raiseSort = (path) => {
    const tempSortColumn = { ...sortColumn };
    if (tempSortColumn.path === path)
      tempSortColumn.order = tempSortColumn.order === "asc" ? "desc" : "asc";
    else {
      tempSortColumn.path = path;
      tempSortColumn.order = "asc";
    }
    onSort(tempSortColumn);
  };

  const renderSortIcon = (col, sortColumn) => {
    if (col.path === sortColumn.path && sortColumn.order === "asc")
      return <i className="fa fa-chevron-up"></i>;
    if (col.path === sortColumn.path && sortColumn.order === "desc")
      return <i className="fa fa-chevron-down"></i>;
  };
  return (
    <thead>
      <tr>
        {columns.map((col, index) => {
          if (col.label && col.label !== "")
            return (
              <th
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => raiseSort(col.path)}
              >
                {col.label}
                {renderSortIcon(col, sortColumn)}
              </th>
            );
          return <th key={index}></th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
