import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Song from './Song';


const SongsList = ({ songs, history, location, match, albums }) => {
  const albumId = parseInt(match.params.id);

  const renderAlbum = (album) => {
    return <Fragment key={album.id}>
      <img className="cover-big" src={album.cover} alt="album-cover" />
      <p className="name-detail">{album.name}</p>
      <p className="artist-detail">{album.artist}</p>
      </Fragment>;
  }

  return <Fragment key={albumId}>
    <div className="albumDetail">
        {albums.list.map(album => {
          return album.id === albumId ? renderAlbum(album): '';
        })}
    </div>
    <ul className="list-group">
      {songs.list.map(song => {
        return song.album_id === albumId ? 
              <Song key = {song.id.toString()} song={song} 
                    history={history}  
                    location={location}
                    match={match} />: '';
      })}
    </ul>
  </Fragment>
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    ...state,
  }
}
   
export default connect(
    mapStateToProps,
    () => ({}),
)(SongsList);