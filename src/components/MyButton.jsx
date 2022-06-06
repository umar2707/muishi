import React from 'react'
import { Button } from 'react-bootstrap'

const MyButton = ({title}) => {
  return (
    <Button className='my-button mt-5'>
        {title}
    </Button>
  )
}

export default MyButton
