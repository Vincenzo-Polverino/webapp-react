import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-dark py-3 shadow'>
            <nav className=' mx-2 '>
                <NavLink to="/" className="text-decoration-none text-light">
                    <h2>Home</h2>
                </NavLink>
            </nav>
        </header>

    )
}