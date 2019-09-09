import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState();

  return (
    <>
      <input onChange={({ target: { value }}) => setValue(value)} />
      {value}
    </>
  )
}
