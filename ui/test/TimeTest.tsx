import React from 'react'

import { Button } from '@mantine/core';
import { Box, Title, Text, Stack, Container } from '@mantine/core';

import TimeInit from './timeTest/TimeInit'
import ClockWrite from './timeTest/ClockWrite'
import ClockList from './timeTest/ClockList'
import ClockReadDisplay from './timeTest/ClockReadDisplay'

import * as ActClk from "../../001.time/03.clock.unit/clock.action";

export default function ContentsPage() {


  var act00 = async () => {
    var bit = await window['TIME'](ActClk.READ_CLOCK, { idx:'clk00' })
    alert( JSON.stringify(bit))
  }

 



  return (
    <Container size="md" p={0} style={{ backgroundColor: '#ab9d77', minHeight: '100vh', color: '#000' }}>
      <Box p={40}>
        <Title order={1} style={{ fontSize: 72, fontWeight: 300, marginBottom: 40 }}>
          TIME TEST
        </Title>

        <Text>--------------------------------------------------------------------------------------------------------------------------------------------------------</Text>

        <Stack >

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <TimeInit />
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <ClockWrite />
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <ClockReadDisplay />
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <ClockList />
          </Box>

        </Stack>



      </Box>
    </Container>
  );
}
