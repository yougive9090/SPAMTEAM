import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {


    return (
    <div className="Menu">
        <div className="background"></div>
        <div className="menubackground"> {/*메뉴 윗부분*/}
            <div className="menuName">학교 정보 공유 플랫폼</div>
            <Link to="/home" className="menu_home">홈</Link>
            <div className="menu_item">대회</div>
            <div className="menu_item">자격증</div>
            <div className="menu_item">프로그램</div>
            <div className="menu_item">동아리</div>
            <div className="menu_item">선배의 팁</div>
            <div className="menu_item">홍보</div>
            <button className="menu_item">글쓰기</button>
        </div>
        <div className='two'>
            <div className='tag'>처음 온 후배를 위한<br></br>학교 정보 모음</div>
            <div className='ks'>
                <div className='k'>키워드로 정보 찾기</div>
                <div className='s'>최근 게시글 보기</div>
            </div>
            
        </div>
        <div className='sch'>
            <div className='schtext'>통합검색</div>
            <div className='schmain'>
                <input className='schck' placeholder='예:정보처리기능사, 게임잼, 영상편집, 해킹대회, Unity'/>
                <div className='schen'>검색</div>
            </div>
        </div>
    </div>
  );
}

export default Menu;
