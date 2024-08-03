import React from 'react'

const Memo = ({name}) => {
  return (
    <div>
      The Name is {name}
    </div>
  )
}

export default React.memo(Memo)
