import { useState } from 'react'

export default function ReviewForm({ movieId, onReviewAdded }) {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [vote, setVote] = useState(0)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !text) {

            setError('Compila tutti i campi richiesti')
            return
        }

        const reviewData = {
            name,
            text,
            vote,

        }

        fetch(`http://localhost:3000/api/movies/${movieId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(reviewData),
        })

            .then((res) => res.json())
            .then((data) => {
                if (data.review) {

                    onReviewAdded(data.review)
                    setName('')
                    setText('')
                    setVote(0)
                    setError('')
                }
            })
            .catch((error) => {
                setError('Inserimento della recensione fallito')
                console.error('Errore di inserimento:', error)
            })
    }


    return (
        <div className="card p-3 shadow mt-4">
            <h3>Leave a Review</h3>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="reviewerName">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="reviewerName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="reviewText">
                        Review
                    </label>
                    <textarea
                        className="form-control"
                        id="reviewText"
                        rows="3"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="reviewVote">
                        Rating (1-5)
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="reviewVote"
                        value={vote}
                        onChange={(e) => setVote(Math.max(1, Math.min(5, e.target.value)))}
                        min="1"
                        max="5"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit Review
                </button>
            </form>
        </div>
    );
}