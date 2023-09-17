import React, { useEffect, useRef } from 'react'
import { mount } from 'hello-world/src/main'

export default (): React.ReactElement => {
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div />
}
