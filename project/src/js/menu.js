import './menu.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

function Menu() {
  const keywords = [
    "게임학과",
    "게임 프로그래밍",
    "게임 기획",
    "게임 그래픽",
    "정보처리기능사",
    "컴퓨터활용능력",
    "유니티",
    "리액트",
    "깃허브",
    "자격증",
    "대회",
    "동아리"
  ];

  const [search, setSearch] = useState("");

  const chosungList = [
    "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ",
    "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
    "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ",
    "ㅋ", "ㅌ", "ㅍ", "ㅎ"
  ];

  const getChosung = (text) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i) - 44032;

      if (code >= 0 && code <= 11171) {
        const chosungIndex = Math.floor(code / 588);
        result += chosungList[chosungIndex];
      } else {
        result += text[i];
      }
    }

    return result;
  };

  const related = keywords.filter((word) => {
    const lowerWord = word.toLowerCase();
    const lowerSearch = search.toLowerCase();
    const wordChosung = getChosung(word);

    return (
      lowerWord.includes(lowerSearch) ||
      wordChosung.includes(search)
    );
  });

  return (
    <div className="Menu">
      <div className="background"></div>

      <div className="menubackground">
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
        <div className='tag'>
          처음 온 후배를 위한<br />
          학교 정보 모음
        </div>

        <div className='ks'>
          <div className='k'>키워드로 정보 찾기</div>
          <div className='s'>최근 게시글 보기</div>
        </div>
      </div>

      <div className='sch'>
        <div className='schtext'>통합검색</div>

        <div className='schmain'>
          <input
            className='schck'
            placeholder='예:정보처리기능사, 게임잼, 영상편집, 해킹대회, Unity'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className='schen'>검색</div>
        </div>

       <div className='Search_c'>
         {search !== "" && (
          <ul className="searchList" style={{ listStyle: "none" }}>
            {related.map((word, index) => (
              <li
                key={index}
                onClick={() => setSearch(word)}
              >
                {word}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>

      
    </div>
  );
}

export default Menu;