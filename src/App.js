import React, { Component } from 'react'
import Card from './components/Card'
// import Song from './components/Song'

// let movies = [
//   {
//     title: 'Goodfellas',
//     plot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit culpa consectetur asperiores corrupti et optio. Suscipit harum rem quidem ratione architecto? Illum qui enim ab aliquam laboriosam voluptatum debitis facere.',
//     poster: 'https://images-na.ssl-images-amazon.com/images/I/51rOnIjLqzL._AC_SY450_.jpg'
//   },
//   {
//     title: 'The Room',
//     plot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit culpa consectetur asperiores corrupti et optio. Suscipit harum rem quidem ratione architecto? Illum qui enim ab aliquam laboriosam voluptatum debitis facere.',
//     poster: 'https://fleurcinema.com/filesystem/fleur-cinema/Movies/2019/october/theroom.png'
//   }
// ]

// let songs = [
//   {
//     name: 'Awake',
//     artist: 'The Unsung',
//     albumCover: 'https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F619765--8778177E-5FEA-4215-A0F08F3E305B87AB--1583434939528--Bandhive.jpg?fm=jpg&q=75&w=800&s=81f5ef0eb08a5deb671fd779d11c006f'
//   },
//   {
//     name: 'All Star',
//     artist: 'Smash Mouth',
//     albumCover: 'https://i.ytimg.com/vi/L_jWHffIx5E/maxresdefault.jpg'
//   },
//   {
//     name: 'Hotel California',
//     artist: 'The Eagle',
//     albumCover: 'https://media.musicarts.com/is/image/MMGS7/J22229000000000-00-600x600.jpg'
//   },
//   {
//     name: 'Old Town Road',
//     artist: 'Lil Nas',
//     albumCover: 'https://s3.amazonaws.com/media.thecrimson.com/photos/2019/04/14/200610_1337381.jpeg'
//   },
//   {
//     name: 'Bad Guy',
//     artist: 'The Unsung',
//     albumCover: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Myboysinglecover.jpg'
//   },
// ]

// ==========================================


class App extends Component {

  state = {
    title: '',
    plot: '',
    poster: '',
    movies: []
  }

  handleInputChange = event => {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddMovie = event => {
    event.preventDefault()
    let movies = JSON.parse(JSON.stringify(this.state.movies))
    movies.push({
      title: this.state.title,
      plot: this.state.plot,
      poster: this.state.poster
    })
    this.setState({ movies })
    
  }


  render() {
    return (
      <>

        <form>
          <label htmlFor="title">Movie Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange} />

          <label htmlFor="plot">Plot</label>
          <input
            type="text"
            name="plot"
            value={this.state.plot}
            onChange={this.handleInputChange} />

          <label htmlFor="poster">Poster</label>
          <input
            type="text"
            name="poster"
            value={this.state.poster}
            onChange={this.handleInputChange} />


          <button onClick={this.handleAddMovie}>Submit</button>

        </form>
        { this.state.movies.map(movie => <Card movie={movie}/>)}



        {/* <ul>
          {
            this.state.items.map(item => <li>{item}</li>)
          }
        </ul> */}
      </>
    )
  }
}









// ==========================================





  
  
// function App() {
//   return (
//     <>
   {/* { songs.map(song => <Song song={song} />) } */}
  

   {/* { movies.map(movie => <Card movie={movie} />) } */}







   {/* pass props */}
    {/* <Card 
      movie={movies[0]}
    />
    <Card 
      movie={movies[1]} */}
    {/* /> */}


//    </>
//   )
// }

export default App;
