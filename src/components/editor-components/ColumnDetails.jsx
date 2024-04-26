import { queryDataAlt as queryData } from "../../assets/data/data"
import { createTableColumns } from "../../assets/data/tableUtils"

const ColumnDetails = () => {
  return (
    <div>
      <table>
        {createTableColumns(queryData)}
      </table>
    </div>
  )
}

export default ColumnDetails