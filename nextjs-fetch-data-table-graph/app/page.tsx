'use client'
import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
// React Grid Logic
import '@ag-grid-community/styles/ag-grid.css'
// Core CSS
import '@ag-grid-community/styles/ag-theme-quartz.css'
import EChartComponent from '@/components/EChartComponent'

export default function Home() {
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ])
  const [colDefs, setColDefs] = useState<Record<string, string>[]>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ])

  const defaultColDef = {
    flex: 1,
  }

  const option: echarts.EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'bar',
        data: [23, 24, 18, 25, 27, 28, 25],
      },
    ],
  }

  return (
    <div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
      <div>
        <EChartComponent option={option}></EChartComponent>
      </div>
    </div>
  )
}
