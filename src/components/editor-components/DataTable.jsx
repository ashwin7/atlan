import { createTableHeaderFromData, createTableRowsFromData } from "../../assets/data/tableUtils"

const DataTable = ({result=[]}) => {
  return (
    <div className='border-gray-100 rounded-md m-0 mr-1.5 mb-1 h-[30vh] overflow-auto shadow'>
      {result.length > 0 ? (
        <table>
          <thead className="bg-gray-200">
            {createTableHeaderFromData(result)}
          </thead>
          {createTableRowsFromData(result)}
        </table>
      ) : null}
    </div>
  )
}

export default DataTable