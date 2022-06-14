import Cartwidget from '../cartwidget/Cartwidget';
import './Navbar.css';
import products from '../../data/Mokup';
const NavBar = () => {
    return (
        <div>
            <nav className='nav'>
                <ul className='roberto'>
                    <Cartwidget />
                    <products/>
                   <img src="https://img2.freepng.es/20180626/ipg/kisspng-2018-world-cup-2014-fifa-world-cup-fifa-world-cup-5b3259fbcbcc01.2084896815300264918348.jpg" className="Alt-logo" alt="logo"></img>
                    <li className='carlos'><button>Equipos</button></li>
                    <li className='carlos'><button>inicio</button></li>
                    <li className='carlos'><button>productos</button></li>
                    <li className='carlos'><button>favoritos</button></li>
                    <li className='carlos'><button>contacto</button></li>
                </ul>
                {/* <div className="Categories">
                    <NavLink to='/list' className={({ isActive }) => isActive ? 'ActiveOption': 'Option' }>List</NavLink>
                    
                    <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption': 'Option' }>Detail</NavLink>
                </div> */}
            </nav>
        </div>
    
    )
}

export default NavBar;