import { useMemo, useEffect } from 'react';


const useMount = () => {
    const mountState = useMemo(
        () => ({
            mounted: false,
        }),
        []
    )

    useEffect(
        () => {
            mountState.mounted = true;
            return () => {
                mountState.mounted = false;
            }
        },
        [mountState]
    )

    return mountState
}

export default useMount