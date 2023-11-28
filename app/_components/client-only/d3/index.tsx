'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

interface DataItem {
  year: string
  value: number
}

interface ScaleProps {
  xDomain: string[]
  xRange: [number, number]
  yDomain: [number, number]
  yRange: [number, number]
  render: (scale: Scale) => ReactNode
}

interface Scale {
  xScale: d3.ScaleBand<string>
  yScale: d3.ScaleLinear<number, number>
  xAxis: d3.Axis<any>
  yAxis: d3.Axis<any>
}

interface BarProps {
  d: DataItem
  h: number
  color: string
  xScale: d3.ScaleBand<string>
  yScale: d3.ScaleLinear<number, number>
}

export interface BarChartProps {
  margin?: number
  width?: number
  height?: number
  colorCode?: string
  data?: DataItem[]
}

const Scale = ({ xDomain, xRange, yDomain, yRange, render }: ScaleProps) => {
  const xScale = d3.scaleBand().domain(xDomain).range(xRange).padding(0.5)
  const yScale = d3.scaleLinear().domain(yDomain).range(yRange)

  const xAxis = d3.axisBottom(xScale)
  const yAxis = d3
    .axisLeft(yScale)
    .tickFormat((d) => {
      return '$' + d
    })
    .ticks(10)

  const scale: Scale = {
    xScale,
    yScale,
    xAxis,
    yAxis,
  }

  return <>{render(scale)}</>
}

const Bar = ({ d, h, color, xScale, yScale }: BarProps) => {
  return (
    <rect
      className="bar"
      fill={color}
      x={xScale(d.year)}
      y={yScale(d.value)}
      width={xScale.bandwidth()}
      height={h - yScale(d.value)}
    />
  )
}

const BarChart = (props: BarChartProps) => {
  const {
    margin = 200,
    width = 600,
    height = 500,
    colorCode = '#029CFD',
    data = [
      { year: '2011', value: 45 },
      { year: '2012', value: 47 },
      { year: '2013', value: 52 },
      { year: '2014', value: 70 },
      { year: '2015', value: 75 },
      { year: '2016', value: 78 },
    ],
  } = props

  const w = width - margin
  const h = height - margin
  const xDomain = data.map((d) => d.year)
  const xRange: [number, number] = [0, w]
  const yDomain: [number, number] = [0, 100]
  const yRange: [number, number] = [h, 0]

  return (
    <svg width={width} height={height}>
      xDomain && xRange && yDomain && yRange && (
      <Scale
        xDomain={xDomain}
        xRange={xRange}
        yDomain={yDomain}
        yRange={yRange}
        render={({ xScale, yScale, xAxis, yAxis }) => (
          <>
            {xScale && yScale && (
              <g transform={`translate(100, 100)`}>
                {data.map((d, i) => (
                  <Bar
                    key={i}
                    d={d}
                    h={h}
                    color={colorCode}
                    xScale={xScale}
                    yScale={yScale}
                  />
                ))}
                <g
                  transform={`translate(0, ${h})`}
                  ref={(node) => node && xAxis && d3.select(node).call(xAxis)}
                />
                <g
                  ref={(node) => node && yAxis && d3.select(node).call(yAxis)}
                />
              </g>
            )}
          </>
        )}
      />
      )
    </svg>
  )
}

export default BarChart
