import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import Box from '../components/Box'
import './index.css'

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const iMax = 35
const jMax = 45

type NeverParam = {
  key: string
  color: string
}

const Root: FC = () => {
  const [matrix, setMatrix] = useState<NeverParam[][]>([[]] as NeverParam[][])

  useEffect(() => {
    let temp = [[]] as NeverParam[][]
    Array(iMax).fill('').map((_, i) => {
      temp[i] = []
      Array(jMax).fill('').map((_, j) => {
        temp[i].push({
          key: i.toString() + j.toString(),
          color: getRandomColor()
        })
      })
    })
    setMatrix(temp)
  }, [])

  const onClicked = (i: number, j: number) : void => {
    setMatrix(matrix => {
      let temp = matrix
      matrix.map((rows, ii) => {
        rows.map((cell, jj) => {
          if ((Math.abs(i - ii) < 2) && (Math.abs(j - jj) < 2)) {
            temp[ii][jj] = {
              key: temp[ii][jj].key,
              color: getRandomColor()
            }
          }
        })
      })
      return [...temp]
    })
  }
  
  return (
    <div className="root" style={{gridTemplateColumns: Array(jMax).fill('50px').join(' '), gridTemplateRows: Array(iMax).fill('50px').join(' ')}}>
      {
        matrix.map((rows, i) => {
          return rows.map((cell, j) => {
            return (
              <Box key={cell.key} bgColor={cell.color} onClick={() => onClicked(i, j)}/>
            )
          })
        })
      }
    </div>
  );
}

export default Root;
