import React from 'react';

const Card = props => {
  return(
    <div style={{ margin: '1em' }} className='max-w-xs py-4 px-8 xs-white shadow rounded'>
      <div className="flex justify-center">
        <img
          alt="avatar"
          style={{ width: '70px' }}
          src={props.avatar_url}
          className='rounded-full border-2 border-gray-500'
        />
      </div>
      <div className="flex grid grid-rows-3 justify-center">
        <div
          className="row-span-1"
          style={{ fontWeight: 'bold' }}
        >
          {`@${props.login}`}<span>{` - ${props.name}`}</span>
        </div>
        <div className="row-span-1">{props.blog}</div>
        <div className="row-span-1">
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
            <a target="_blank" href={props.html_url}>Profile</a>
          </span>
          <button className='btn btn-delete' onClick={() => props.onRemove(props.id) }>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default Card