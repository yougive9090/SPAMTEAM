import "./wkrurwmd.css";
import './home.css';

function wkrurwmd() {
  const majors = [
    {
      name: "설계과",
      icon: "📐",
      certs: [
        "3D프린터운용기능사",
        "전산응용기계제도기능사",
        "자동화설비운용기능사",
      ],
    },
    {
      name: "제어과",
      icon: "⚙️",
      certs: [
        "전자캐드기능사",
        "임베디드기능사",
        "전자기능사"
      ],
    },
    {
      name: "정보통신과",
      icon: "📡",
      certs: [
        "아직 모름"
      ],
    },
    {
      name: "소프트웨어과",
      icon: "💻",
      certs: [
        "프로그래밍기능사",
        "웹디자인개발기능사",
        "컴퓨터활용능력2급이상"
      ],
    },
  ];

  return (
    <div className="major-container">
      {majors.map((major, index) => (
        <div className="major-box" key={index}>
          <div className="major-icon">{major.icon}</div>

          <h2>{major.name}</h2>
          <p className="major-label">대표 자격증</p>

          <ol className="cert-list">
            {major.certs.map((cert, certIndex) => (
              <li key={certIndex}>{cert}</li>
            ))}
          </ol>
        </div>
      ))}
      <a href="http://localhost:3000" alt="None" className="back"><img src="back.png" alt="Home" className="back"/></a>
    </div>
  );
}

export default wkrurwmd;