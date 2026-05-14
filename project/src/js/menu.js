import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {


    return (
    <div className="Menu">
        <div className="background"></div>
        <div className="menubackground"> {/*메뉴 윗부분*/}
            <div className="menuName">서로 보고</div>
            <Link to="/home" className="menu_home">
                홈
            </Link>
        </div>
    </div>
  );
}

export default Menu;
