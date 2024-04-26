import { useContext, useState } from "react";
import MainContext from "../../context/QueryContext";
import { queryDataAlt as queryData } from "../../assets/data/data";
import { queryData2 } from "../../assets/data/data";
import ToastProvider from "./Toast";

const EditorPanel = () => {
  const { query, setQueryHistory, queryHistory, setQuery } = useContext(MainContext);
  const [openToast, setOpenToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const runQuery = () => {
    if (query.trim() === "") {
      setErrorMessage((message) => ('Oops, that was a Null Query. Please type another query, or select from the ones previously saved.'));
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 4000);
      return;
    }
    if (query === "SELECT * FROM dataTable;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData,
      }));
    }
    else if (query === "SELECT id, first_name, last_name, email FROM dataTable;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData2,
      }));
    }
    else {
      setErrorMessage((message) => ('Sorry, that was a Wrong Query. Please enter another query, or select from the ones previously saved.'));
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 3000);
    }
    if (queryHistory.history[queryHistory.history.length - 1] !== query) {
      setQueryHistory((prev) => ({
        ...prev,
        history: [...prev.history, query],
      }));
    }
  };

  const saveQuery = () => {
    if (query.trim() === "") {
      setErrorMessage((message) => ('Sorry, that was a Null Query. Please enter another query, or select from the ones previously saved.'));
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 3000);
      return;
    }

    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));
  };

  const clearQuery = () => {
    setQuery("");
  };

  return (
    <>
      {openToast && <ToastProvider errorMessage={errorMessage} setCloseToast={setOpenToast} />}
      <div className='flex justify-evenly md:flex-col md:justify-normal'>
        <div className="relative inline-block px-4 py-2 my-2 font-medium group cursor-pointer">
          <button onClick={() => runQuery()} class="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Run
          </button>
        </div>
        <div className="relative inline-block px-4 py-2 my-2 font-medium group cursor-pointer">
          <button onClick={() => saveQuery()} class="w-full bg-lime-500 hover:bg-lime-400 text-white font-bold py-2 px-4 border-b-4 border-lime-700 hover:border-lime-500 rounded">
            Save
          </button>
        </div>
        <div className="relative inline-block px-4 py-2 my-2 font-medium group cursor-pointer">
          <button onClick={() => clearQuery()} class="w-full bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
            Clear
          </button>
        </div>
    </div>
    </>
  );
};

export default EditorPanel;
