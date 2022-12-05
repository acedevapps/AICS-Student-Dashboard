import { useEffect } from "react";

function useScript(src, callback) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => callback();
    return () => {
        document.body.removeChild(script);
        }
    }, [src, callback]);
}

export {useScript};