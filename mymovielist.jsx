// Step 1: finish list
//Step 2: stylize list
//Step 3: add star system                  
import GH1 from './assets/GH1.gif'
import './movie.css'
import roundround from './assets/roundround.gif'
import palmsprings from './assets/palmsprings.gif'
import SourceCode from './assets/SourceCode.gif'
import GH2 from './assets/GH2.gif'
import whenwefirstmet from './assets/whenwefirstmet.gif'
import firstdates from './assets/firstdates.gif'
import arrow from './assets/arrow.gif'
// import Stars from '../reviews/stars/stars.jsx'
import ReviewForm from '../reviews/reviewform.jsx'
let favoriteMovies = [
    {
        id: 1,
        movieImage: GH1,
        movieName: "Groundhog Day",
        movieDate: "1993"
    },
    {
        id: 2,
        movieImage:palmsprings ,

        movieName: "Palm Springs",
        movieDate: "2020"
    },
    {
        id: 3,
        movieImage: whenwefirstmet,

        movieName: "When We first met",
        movieDate: "2018"
    },
    {
        id: 4,
        movieImage: firstdates,

        movieName: "50 first dates",
        movieDate: "2004"
    },
    {
        id: 5,
        movieImage: GH2,

        movieName: "Naked",
        movieDate: "2017"
    },
    {
        id: 6,
        movieImage: SourceCode,

        movieName: "Source Code",
        movieDate: "2011"
    },
    {
        id: 7,
        movieImage: roundround,

        movieName: "Round and Round",
        movieDate: "2023"
    },
    
];



function MyMovieList () {
console.log("Favorite movies data:", favoriteMovies)
    return (
      
        <div>
            <div>
               {/* <ReviewForm /> */}
            </div>
            <div className='paragraph'>Which Groundhog Day knockoff most closely resembles Bill Murray's?<br/>
            <br/>
            Vote Below <br/>
<img className='arrow' src={arrow} alt='arrow pointing' />
            </div>
            
            <br />
            {/* maps over the favorite movies array and outputs the favorite movie into
            jsx below */}
            {
                favoriteMovies.map((favoriteMovie, Index)=> (
                   
                    <div className='container' key={favoriteMovie.id}>
                        
                        <div >
                           <img className='containimg' src = {favoriteMovie.movieImage} alt='Image of Movie'/>
                            </div>

                        <div className='moviename' >
                             {favoriteMovie.movieName}
                            
                            </div>
                            <div className='moviedate'>
                                {favoriteMovie.movieDate}
                              
                                </div>
                                <div>
                                    <ReviewForm />
                                    </div>
                                </div>

                              
                ))
            }
        </div>
    ) 

}

export default MyMovieList