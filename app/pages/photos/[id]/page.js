import Photo from '@/app/Components/PhotoDetails/Photo';
import React from 'react'

const page = ({params}) => {
  const {id} = params;
  return (
    <div className='mt-2'>
      <Photo id={id} />
    </div>
  )
}

export default page