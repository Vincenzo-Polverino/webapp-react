import { Link } from "react-router-dom"
export default function MovieCard({ movie }) {
    return (
        <div className="movie card d-flex shadow-sm h-100">
            <div className="card-body">
                <h4>{movie.title}</h4>

                <p className="my-1 mt-4"><strong>Director:</strong> {movie.director}</p>
                <p className="my-1"><strong>Anno:</strong> {movie.release_year}</p>
                <p className="my-1 mb-3"><strong>Genere:</strong> {movie.genre}</p>
                <Link to={`/movies/${movie.id}`} className="details btn btn-dark">Dettagli</Link>
            </div>
        </div>
    );
}