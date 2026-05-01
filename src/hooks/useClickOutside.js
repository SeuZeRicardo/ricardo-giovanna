import { useEffect } from "react";

/**
 * Custom hook to detect clicks outside a specified element
 * @param {React.RefObject} ref - Reference to the element to monitor
 * @param {Function} callback - Function to call when click is detected outside
 */
function useClickOutside(ref, callback) {
  useEffect(() => {
    const handleClick = (event) => {
      // Check if ref exists and if the clicked target is NOT inside the ref element
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    // Cleanup the listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
}

export default useClickOutside;
