import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Title, Text, Stack, Container } from '@mantine/core';
import { Button } from '@mantine/core';

import * as ActTrn from '../../000.control/01.turn.unit/turn.action'

export default function Component() {

    setTimeout(async () => {
        var bit = await window['CONTROL'](ActTrn.START_TURN, {})
    }, 333)

    var act00 = () => {
        //document.location.href = './test/pixel'
      }


    return (
        <Container size="md" p={0} style={{ backgroundColor: '#ab9d77', minHeight: '100vh', color: '#000' }}>
            <Box p={40}>

              <Title order={1} style={{ fontSize: 72, fontWeight: 300, marginBottom: 40 }}>
                    DAY
                </Title>

                <Stack >

                    <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
                        <Button fullWidth variant="outline" color="black" onClick={act00} > OPEN CONTROL TEST </Button>
                    </Box>

                </Stack>


                <Box mt={40}>
                    <Text size="sm">ISBN 978-3-9819851-1-5</Text>
                </Box>
            </Box>
        </Container>
    );
}