import './home.css';
function Home() {
  return (
    <div className="Home">
      <div className="homebackground">
      <img src="1.png" alt="Home" className="homeimage" />
      <img src="2.png" alt="Home" className="homeimage" />
      <img src="3.png" alt="Home" className="homeimage" />
      <img src="4.png" alt="Home" className="homeimage" />
    </div>


      <div className="box">
      <a href="https://srobot.sen.hs.kr/" alt="None" className="homelink">공식 홈페이지</a>
      <a href="https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?SHL_IDF_CD=f201ee70-d519-4209-b849-f09ca49ea214" alt="None" className="homelink">학교 알리미</a>
      <a href="https://www.youtube.com/@%EC%84%9C%EC%9A%B8%EB%A1%9C%EB%B4%87%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90" alt="None" className="homelink">유튜브 채널</a>
      <a href="https://www.instagram.com/srobotics_high" alt="None" className="homelink">인스타그램</a>
      <a href="https://srobot.sen.hs.kr/67182/subMenu.do" alt="None" className="homelink">가정통신문</a>

      </div>
      <a href="http://localhost:3000" alt="None" className="back"><img src="back.png" alt="Home"/></a>
      
    </div>
  );
}

export default Home;