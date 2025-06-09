

import { useQuery } from "@tanstack/react-query"

export function useInitEarth() {
    return useQuery({
        queryFn: async () => {

            const response = await fetch('/api/earth/init')
            if (!response.ok) {
                alert('Network response was not ok : /api/space/space/init ')
                //throw new Error('Network response was not ok')
            }
            return response.json()

        },
        queryKey: ['initEarth']
    })
}

