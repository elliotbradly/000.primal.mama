"use client"
import { Text,  Divider } from '@mantine/core'

import React from 'react'
import { useInitPixel } from '../../../queue/pixel.query'

const Test = () => {

  //const data = {}
  const { data, error, fetchStatus } = useInitPixel()

  //if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {

    return (<div>
      
      <Text c="dark" size="md" style={{ lineHeight: 1.6 }}>
        Is the Pixel Pivot present?
      </Text>



      <Text c='green' size="md" style={{ lineHeight: 1.6 }}>
        {JSON.stringify(data)}
      </Text>

      <Divider></Divider>



    </div>)
  }

  return (
    <div>
      opening...
    </div>
  )


}

export default Test


