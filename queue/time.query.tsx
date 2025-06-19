
import * as ActTme from "../001.time/00.time.unit/time.action";
import { useQuery } from "@tanstack/react-query"

export function useInitTime() {
    return useQuery({
        queryFn: async () => {

            var bit = await window['TIME']( ActTme.INIT_TIME, {})
            return bit

        },
        queryKey: ['initTime']
    })
}

