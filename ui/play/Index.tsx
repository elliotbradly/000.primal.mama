
import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Divider, ScrollArea } from '@mantine/core';

import * as ActTrn from '../../000.control/01.turn.unit/turn.action'

export default function Component() {

    setTimeout(async () => {
        var bit = await window['CONTROL'](ActTrn.START_TURN, {})

        alert(" go " + JSON.stringify(bit))
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

                PLAY

            </Box>

        

        </Box>

    );
}