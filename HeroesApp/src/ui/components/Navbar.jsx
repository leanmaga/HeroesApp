import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand m-2 pe-4" 
                    to="/"
                >
                    HeroesApp
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <NavLink
                            aria-current="page"
                            className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`}  
                            to="/search"
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`}  
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink 
                            className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`}  
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        
                        
                    </ul>
                    <div className=" w-100 d-flex justify-content-end">
                        <ul className="navbar-nav d-flex flex-row">
                            <span className="p-3 nav-item nav-link text-primary">
                                Leandro
                            </span>
                            <button className="p-3 nav-item nav-link btn" onClick={ onLogout }>
                                Logout
                            </button>
                            <span className="p-3 nav-item nav-link text-primary text-white">
                                <img src="/assets/avatar.png" alt="user" className=' icons' />
                            </span>
                            

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
} 