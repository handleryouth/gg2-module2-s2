import { useCallback, useRef } from 'react'

function useDebounce() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stateTracker = useRef<any>()
  const debounce = useCallback((value: Function, delay?: number) => {
    clearTimeout(stateTracker.current)
    stateTracker.current = setTimeout(() => {
      value()
    }, delay || 300)
  }, [])
  return debounce
}

export default useDebounce
