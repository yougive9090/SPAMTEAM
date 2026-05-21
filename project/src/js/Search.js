import { useState } from "react";

function SearchBox() {
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

  const related = keywords.filter((word) =>
    word.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="SearchBox">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search !== "" && (
        <ul>
          {related.map((word, index) => (
            <li key={index}>
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;