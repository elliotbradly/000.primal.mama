
import { useQuery } from "@tanstack/react-query"

import * as ActPxl from "../400.pixel/00.pixel.unit/pixel.action";
import * as ActClr from "../400.pixel/01.color.unit/color.action";


export function useInitPixel() {
    return useQuery({
        queryFn: async () => {
            var bit = await window['PIXEL']( ActPxl.INIT_PIXEL, {})
            return bit

        },
        queryKey: ['initPixel']
    })
}


export function useFetchColor() {
    return useQuery({
        queryFn: async () => {
            var bit = await window['PIXEL']( ActClr.FETCH_COLOR, {})
            return bit

        },
        queryKey: ['fetchColor']
    })
}

