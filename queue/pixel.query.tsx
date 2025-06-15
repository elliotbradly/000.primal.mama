
import * as ActPxl from "../400.pixel/00.pixel.unit/pixel.action";
import { useQuery } from "@tanstack/react-query"


export function useInitPixel() {
    return useQuery({
        queryFn: async () => {
            var bit = await window['PIXEL']( ActPxl.INIT_PIXEL, {})
            return bit

        },
        queryKey: ['initPixel']
    })
}

