"use client"
import { Text,  Divider } from '@mantine/core'

import React from 'react'
import { useWriteClock } from '../../../queue/time.query'

const Test = () => {

  //const data = {}
  const { data, error, fetchStatus } = useWriteClock('clk00', {yrs:1978, mth:4, day:11})

  //if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    return (<div>
      
      <Text c="dark" size="md" style={{ lineHeight: 1.6 }}>
        Write Clock
      </Text>



      <Text c='green' size="md" style={{ lineHeight: 1.6 }}>
        {JSON.stringify(data)}
      </Text>

      <Divider></Divider>



    </div>)
  }

  return (
    <div>
      writing clock...
    </div>
  )


}

export default Test


