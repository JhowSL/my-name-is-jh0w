import { useScrollPosition } from '@/hooks'
import React from 'react'
import { Button } from '.'

export default function ScrollToTopButton({ threshold = 300 }) {
  const isPastThreshold = useScrollPosition(threshold)

  if (!isPastThreshold) return null

  return (
    <Button type="button" onClick={scrollToTop} className="button_top">
      Voltar ao Início
    </Button>
  )
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
