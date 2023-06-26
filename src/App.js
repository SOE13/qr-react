import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const customStyles = {
  headRow: {
    style: {
      backgroundColur: "blue",
      // color: "white",
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontweight: "600",
        textTransform: "uppercase",
      },
    },
  },
};

function App() {
  const column = [
    { name: "ID", selector: (row) => row.id },
    { name: "Name", selector: (row) => row.name },
    { name: "Email", selector: (row) => row.email },
    { name: "City", selector: (row) => row.address.city },
  ];

  useEffect(() => {
    const fetData = async () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setRecords(json))
        .catch((err) => console.log(err));
    };
    fetData();
  }, []);

  const [records, setRecords] = useState([]);
  return (
    <div className={{}}>
      <DataTable
        columns={column}
        data={records}
        customStyles={customStyles}
        pagination></DataTable>
    </div>
  );
}

export default App;
