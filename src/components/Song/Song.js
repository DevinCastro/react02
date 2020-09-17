import React from 'react'


const Song = props => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.song.albumCover} className="card-img-top" alt={props.song.name} />
      <div className="card-body">
        <h5 className="card-title">{props.song.artist}</h5>
        <p className="card-text">{props.song.name}</p>
      </div>
    </div>
  )
}

export default Song