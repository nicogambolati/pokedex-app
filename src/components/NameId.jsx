import React from 'react'

export const NameId = ({name, id}) => {
  return (
    <h1 className="text-capitalize">
    #{id} - {name}
  </h1>
  )
}
