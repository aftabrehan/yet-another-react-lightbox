import * as React from "react";

import { useTimeouts } from "../contexts/Timeouts.js";

export const useDelay = () => {
    const timeoutId = React.useRef<number>();
    const { setTimeout, clearTimeout } = useTimeouts();

    return React.useCallback(
        (callback: (...args: any[]) => void, delay: number) => {
            clearTimeout(timeoutId.current);
            timeoutId.current = setTimeout(callback, delay > 0 ? delay : 0);
        },
        [setTimeout, clearTimeout]
    );
};