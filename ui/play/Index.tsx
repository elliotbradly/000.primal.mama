import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Divider, ScrollArea, Center, Button } from '@mantine/core';
import { Title, Text, Stack, Container } from '@mantine/core';

import Slider from './Slider'

import * as ActBab from '../../111.solid/01.babylon.unit/babylon.action'



export default function Component() {

    const [sliderValue, setSliderValue] = useState(40);

    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
        // You can perform other actions in the parent when the slider value changes
        console.log("Parent received new slider value:", newValue);
    };

    var action = () => {


    }

    setTimeout(() => {
        window['SOLID'](ActBab.OPEN_BABYLON, { src: 'surface00' })
    }, 333)

    return (

        <Center style={{ width: "100%", height: "100vh", padding: "0 20px" }}>

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

                        <Slider value={sliderValue} onChange={handleSliderChange} />


                        <Button onClick={action} size="lg" fullWidth>
                            Record Description
                        </Button>



                    </Stack>

                </Box>
            </Container>



        </Center>


    );





}