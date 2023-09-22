import React, { useEffect, useRef } from 'react'
import { mount } from 'homepage/src/main'

export default (): React.ReactElement => {
  const firstLoad: { current: boolean } = useRef(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!firstLoad.current) {
      mount(ref.current)
      firstLoad.current = true
    }
    
  }, [firstLoad])

  return <div ref={ref} />
}
