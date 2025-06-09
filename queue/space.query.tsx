

import { useQuery } from "@tanstack/react-query"

export function useInitSpace() {
    return useQuery({
        queryFn: async () => {

            const response = await fetch('/api/space/hexmap/shape')
            if (!response.ok) {
                alert('Network response was not ok : /api/space/init ')
                //throw new Error('Network response was not ok')
            }
            return response.json()

        },
        queryKey: ['initSpace']
    })
}

