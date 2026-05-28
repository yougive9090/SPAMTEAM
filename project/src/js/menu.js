import './menu.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

function Menu() {
  
  const keywords = [
      "홈",
      "대회",
      "자격증",
      "프로그램",
      "동아리",
      "선배의 팁",
      "홍보",
      "정보처리기능사",
      "게임잼",
      "영상편집",
      "해킹대회"
  ];

  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  // 검색창이 비어있으면 안 보여줌
  if (search === "") return false;

  // ㄱ, ㄴ, ㄷ 같은 초성 하나만 입력했을 때
  // 단어의 "첫 글자 초성"만 비교
  if (chosungList.includes(search)) {
    return wordChosung[0] === search;
  }

  // 게, 게임, Unity 같은 일반 검색
  return lowerWord.includes(lowerSearch);
});

  return (
    <div className="Menu">
      <div className="background"></div>

      <div className="menubackground">
        <div className="menuName">학교 정보 공유 플랫폼</div>
        <Link to="/home" className="menu_home">홈</Link>
        <div className="menu_item">대회</div>
        <Link to="/Certificate" className="menu_item">자격증</Link>
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
          <div className='k' onClick={() => document.getElementById('search').scrollIntoView({ behavior: 'smooth' ,block: 'center' })}>키워드로 정보 찾기</div>
          <div className='s' onClick={() => document.getElementById('board').scrollIntoView({ behavior: 'smooth' })}>최근 게시글 보기</div>
        </div>
      </div>

      <div className='sch' id="search">
        <div className='schtext'>통합검색</div>

        <div className='schmain'>
         <input
          className='schck'
          placeholder='예:정보처리기능사, 게임잼, 영상편집, 해킹대회, Unity'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedIndex(0);
          }}
          onKeyDown={(e) => {
            if (related.length === 0) return;

            if (e.key === "ArrowDown" || e.key === "PageDown") {
              e.preventDefault();

              setSelectedIndex((prev) =>
                prev < related.length - 1 ? prev + 1 : 0
              );
            }

            if (e.key === "ArrowUp" || e.key === "PageUp") {
              e.preventDefault();

              setSelectedIndex((prev) =>
                prev > 0 ? prev - 1 : related.length - 1
              );
            }

            if (e.key === "Enter") {
              e.preventDefault();

              setSearch(related[selectedIndex]);
            }
          }}
        />

          <div className='schen'>검색</div>
        </div>

       <div className='Search_c'>
         {search !== "" && (
          <ul className="searchList" style={{ listStyle: "none" }}>
            {related.map((word, index) => (
              <li
                key={index}
                className={selectedIndex === index ? "selected" : ""}
                onClick={() => setSearch(word)}
                onMouseEnter={() => setSelectedIndex(index)}
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