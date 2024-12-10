import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

interface EChartComponentProps {
  option: echarts.EChartsOption
  style?: React.CSSProperties
  className?: string
}

const EChartComponent: React.FC<EChartComponentProps> = ({
  option,
  style,
  className,
}) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current)
      chartInstance.setOption(option)

      const handleResize = () => {
        chartInstance.resize()
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        chartInstance.dispose()
      }
    }
  }, [option])

  return <div ref={chartRef} style={style} className={className}></div>
}

export default EChartComponent
