import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Divider, ScrollArea } from '@mantine/core';


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
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: "hidden"
            }}>

                <canvas id='surface00' />

            </Box>

        </Box>

    );
}