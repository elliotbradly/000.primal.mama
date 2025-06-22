
import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Divider, ScrollArea } from '@mantine/core';

import RecordButton from './RecordButton'
import SelectionBox from './SelectionBox'
import Slider from './Slider'

import * as ActBab from '../../111.solid/01.babylon.unit/babylon.action'


export default function Component() {

    setTimeout( ()=>{
        window['SOLID']( ActBab.OPEN_BABYLON, {src:'surface00'})
    }, 333)

    
    return (
        <Box>

            <Box style={{
                width: '1280px',
                height: '720px',
                position: 'relative',
                backgroundImage: 'url(./img/017.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: "hidden"
            }}>

                <canvas id='surface00' />

            </Box>



            <Divider my="md" />
            <RecordButton />
            <Divider my="md" />
            <SelectionBox/>
            <Divider my="md" />
            <Slider/>



        </Box>

    );
}