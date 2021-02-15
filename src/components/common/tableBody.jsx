import _ from "lodash";

const TableBody = (props) => {
  const { data, columns } = props;
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {columns.map((column, index) => {
            return (
              <td key={index}>
                {column.content
                  ? column.content(item)
                  : _.get(item, column.path)}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
