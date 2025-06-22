
import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Divider, ScrollArea } from '@mantine/core';


import * as ActFce from '../../110.shade/02.surface.unit/surface.action'


export default function Component() {

    setTimeout( ()=>{
        window['SHADE']( ActFce.WRITE_SURFACE, {  idx:'fc00',dat:{src:'surface00'}})
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
        </Box>

    );
}