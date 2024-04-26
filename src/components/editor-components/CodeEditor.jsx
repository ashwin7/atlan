import EditorPanel from "./EditorPanel";
import { useContext } from "react";
import MainContext from "../../context/QueryContext";
import MonacoEditor from '@monaco-editor/react';

const Editor = () => {
  const { query, setQuery } = useContext(MainContext);

  const handleEditorChange = (value, event) => {
    setQuery(value);
  }

  return (
    <div className='p-4 border-b border-solid border-gray-100 rounded-md bg-gray-100 m-4 text-sm'>
                <p style={{ fontSize: "1rem" }} className='font-medium text-sm underline pt-3 pb-2 mb-0'>
            <strong>Hint: </strong>You can select a query from left sidebar as well.
          </p>
      <div className='grid grid-cols-12 gap-4'>
        <div className='md:col-span-8 lg:col-span-9 xl:col-span-10 col-span-12 no-gutters'>
        <MonacoEditor
          height="30vh"
          defaultLanguage="sql"
          value={query}
          defaultValue={query}
          onChange={handleEditorChange}
        />

        </div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2'>
          <EditorPanel />
        </div>
      </div>
    </div>
  );
};

export default Editor;
