import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Divider, ScrollArea } from '@mantine/core';
import { Title, Text, Stack, Container } from '@mantine/core';

import * as ActBab from '../../111.solid/01.babylon.unit/babylon.action'

export default function Component() {

    setTimeout(() => {
        window['SOLID'](ActBab.OPEN_BABYLON, { src: 'surface00' })
    }, 333)

    return (

        <Container size="md" p={0} style={{ backgroundColor: '#ab9d77', minHeight: '100vh', color: '#000' }}>
            <Box p={40}>

                <Stack >

                    <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>

                        <Box style={{
                            width: '960px',
                            height: '540px',
                            position: 'relative',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            overflow: "hidden"
                        }}>

                            <canvas id='surface00' />

                        </Box>
                    </Box>

                </Stack>

            </Box>
        </Container>
    );





}