// components/DataTable.tsx
import React, { useState } from "react";

export interface Column<T> {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  pageSize?: number;
}

function DataTable<T>({ columns, data, pageSize = 5 }: DataTableProps<T>) {
  const [page, setPage] = useState(1);
  const start = (page - 1) * pageSize;
  const paginated = data.slice(start, start + pageSize);

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th key={col.key as string} className="p-2 border">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginated.map((row, i) => (
            <tr key={i} className="border">
              {columns.map((col) => (
                <td key={col.key as string} className="p-2 border">
                  {col.render ? col.render(row) : (row[col.key] as any)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end gap-2 mt-2">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button disabled={start + pageSize >= data.length} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DataTable;
