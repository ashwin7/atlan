import { useContext, useState } from "react";
import MainContext from "../../context/QueryContext";
import ColumnDetails from "./ColumnDetails.jsx";
import DataTable from "./DataTable.jsx";
import { CSVLink } from "react-csv";

const Output = () => {
  const [tab, setTab] = useState(0);
  const { queryHistory, setQueryHistory } = useContext(MainContext);

  const exportData = () => {
    console.log("Data to be exported");
  };

  return (
    <div className='border-b border-solid border-gray-100 rounded-md bg-gray-100 p-2 h-[40vh] overflow-clip'>
      {queryHistory.outputData.length > 0 ? (
        <>
          <div className="flex justify-between">
            <div className='query-results  flex items-center'>
              <span
                className={`mr-4 mb-4 border-b border-solid border-[#2026d2] tabs ${tab === 0 ? "active" : ""} cursor-pointer`}
                onClick={() => setTab(0)}
              >
                Output 
              </span>
              <span
                className={`mr-4 mb-4 border-b border-solid border-[#2026d2] tabs ${tab === 1 ? "active" : ""} cursor-pointer`}
                onClick={() => setTab(1)}
              >
                MetaData
              </span>
            </div>
            <div className="underline hover:cursor-pointer hover:text-gray-400" onClick={() => setQueryHistory((prev) => ({
              ...prev,
              outputData: []
            }))}>
              Clear Output
            </div>
          </div>
          <div className='flex justify-between items-end py-1 px-2'>
            <p className='text-2'>
              {/* Showing{" "} */}
              <span>
                {tab === 0
                  ? queryHistory.outputData.length
                  : Object.keys(queryHistory.outputData[0]).length}
              </span>{" "}
              rows in Set
              <span style={{ fontSize: "0.9rem" }} className='text-1'>
                {" "}
                (0.03sec)
              </span>
            </p>
            <div className='export-btn'>
              <CSVLink
                data={queryHistory.outputData}
                filename={"dataOutput.csv"}
              >
                <button onClick={exportData} className="text-gray-700 hover:text-gray-400">
                  Export <span className='fa fa-download'></span>
                </button>
              </CSVLink>
            </div>
          </div>
          {tab === 0 ? (
            <DataTable result={queryHistory.outputData}></DataTable>
          ) : (
            <ColumnDetails result={queryHistory.outputData} />
          )}
        </>
      ) : (
        <div className='text-gray-700 font-bold text-2.5xl flex flex-col h-full items-center justify-center mt-8 text-center'>
          <span className='fa fa-play'></span>
          <p>Run query in box above &#38; Your Output will be displayed!</p>
        </div>
      )}
    </div>
  );
};

export default Output;
