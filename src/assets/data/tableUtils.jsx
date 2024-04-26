
const createTableRowsFromData = (arr) => {
 const keys = Object.keys(arr[0]);
  return arr.map((item, key) => {
    return (
      <tr key={key}>
        {keys.map((content, index) => {
          return <td key={index}>{item[content]}</td>;
        })}
      </tr>
    );
  });
};

const createTableHeaderFromData = (arr) => {
  const keys = Object.keys(arr[0]);
  return (
    <tr>
      {keys.map((item, index) => {
        return <th className="text-gray-600" key={index}>{item}</th>;
      })}
    </tr>
  );
};

const createTableColumns = (arr) => {
  const keys = Object.keys(arr[0]);
  return keys.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item}</td>
      </tr>
    );
  });
};

export { createTableRowsFromData, createTableHeaderFromData, createTableColumns };
