
import * as ActTme from "../001.time/00.time.unit/time.action";
import * as ActClk from "../001.time/03.clock.unit/clock.action";

import { useQuery } from "@tanstack/react-query"

export function useInitTime() {
    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME'](ActTme.INIT_TIME, {})
            return bit

        },
        queryKey: ['initTime']
    })
}


export function useWriteClock(idx, clk) {
    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME'](ActClk.WRITE_CLOCK, { idx, clk })
            return bit

        },
        queryKey: ['writeClock']
    })
}

export function useReadClock(idx) {
    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME'](ActClk.READ_CLOCK, { idx })
            return bit

        },
        queryKey: ['readClock']
    })
}

export function useListClock(idx) {
    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME'](ActClk.LIST_CLOCK, {})
            return bit

        },
        queryKey: ['listClock']
    })
}

