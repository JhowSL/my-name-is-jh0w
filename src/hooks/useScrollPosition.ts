import { useScrollTopStore } from '@/utils/scrollTopButoonState'
import { useEffect } from 'react'

export function useScrollPosition(threshold = 300) {
  const isPastThreshold = useScrollTopStore(state => state.isPastThreshold)
  const setIsPastThreshold = useScrollTopStore(
    state => state.setIsPastThreshold
  )

  useEffect(() => {
    const handleScroll = () => setIsPastThreshold(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isPastThreshold
}
