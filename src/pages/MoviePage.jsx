import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLoader } from '../contexts/LoaderContext'
import ReviewForm from '../components/ReviewForm'
import Loader from '../components/Loader'

export default function MoviePage() {
    const [movie, setMovie] = useState(null)
    const { id } = useParams();
    const { showLoader, hideLoader } = useLoader()

    /*  const movies = [
          {
              id: 1,
              title: "The Shawshank Redemption",
              director: "Frank Darabont",
              year: 1994,
              overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
              rating: 9.3
          },
          {
              id: 2,
              title: "The Dark Knight",
              director: "Christopher Nolan",
              year: 2008,
              overview: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Batman to face his greatest fear.",
              rating: 9.0
          },
          {
              id: 3,
              title: "Inception",
              director: "Christopher Nolan",
              year: 2010,
              overview: "A thief who enters the dreams of others to steal secrets from their subconscious is given the inverse task of planting an idea into the mind of a CEO.",
              rating: 8.8
          },
          {
              id: 4,
              title: "Forrest Gump",
              director: "Robert Zemeckis",
              year: 1994,
              overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an extraordinary love of life.",
              rating: 8.8
          },
          {
              id: 5,
              title: "The Matrix",
              director: "The Wachowskis",
              year: 1999,
              overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
              rating: 8.7
          },
          {
              id: 6,
              title: "Gladiator",
              director: "Ridley Scott",
              year: 2000,
              overview: "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
              rating: 8.5
          },
          {
              id: 7,
              title: "Titanic",
              director: "James Cameron",
              year: 1997,
              overview: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
              rating: 7.8
          },
          {
              id: 8,
              title: "The Godfather",
              director: "Francis Ford Coppola",
              year: 1972,
              overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
              rating: 9.2
          },
          {
              id: 9,
              title: "Pulp Fiction",
              director: "Quentin Tarantino",
              year: 1994,
              overview: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
              rating: 8.9
          },
          {
              id: 10,
              title: "The Avengers",
              director: "Joss Whedon",
              year: 2012,
              overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
              rating: 8.0
          }
      ];*/
    useEffect(() => {
        showLoader()
        fetch(`http://localhost:3000/api/movies/${id}`)


            .then(res => res.json())


            .then((data) => {
                setMovie(data)
                hideLoader()

            })
            .catch((error) => {

                console.error("Fetch movies fallito:", error);
                hideLoader()

            });

    }, [id, showLoader, hideLoader])

    if (!movie) {
        return <Loader />;
    }

    const handleReviewAdded = (newReview) => {
        setMovie((prevMovie) => ({
            ...prevMovie,
            reviews: [...prevMovie.reviews, newReview],
        }));
    };


    return (
        <>
            <div className="moviePage container my-5 mx-auto card p-5 shadow">
                <h2>{movie?.title} ({movie?.release_year})</h2>
                <p className='my-1 mt-4'><strong>Director:</strong> {movie?.director}</p>
                <p className='my-1'><strong>Genre:</strong> {movie?.genre}</p>
                <strong className='mt-2'>Overview:</strong><p>{movie?.abstract}</p>
            </div>
            <section>
                <div className="container mx-auto">
                    <div className='m-3'>
                        <ReviewForm movieId={id} onReviewAdded={handleReviewAdded} />
                    </div>
                    <h1>Reviews</h1>
                    <div>
                        {
                            movie?.reviews && movie.reviews.map(review => (
                                <div className="card m-4 p-3 shadow" key={review.id}>
                                    <h3>{review.name}</h3>
                                    <p><em>{review.text}</em></p>
                                    <h4>Vote: {review.vote}</h4>
                                </div>
                            ))
                        }

                    </div>

                </div>

            </section>
        </>
    );
}