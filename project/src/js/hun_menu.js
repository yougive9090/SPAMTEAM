import './hun_menu.css';
import { useState, useEffect } from 'react';

function HunMenu() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    // 게시글 목록 불러오기
    const fetchPosts = async () => {
        const res = await fetch('http://127.0.0.1:8000/posts');
        const data = await res.json();
        setPosts(data.reverse()); // 최신글 위로
    };

    // 페이지 로드 시 자동 불러오기
    useEffect(() => {
        fetchPosts();
    }, []);

    // 게시글 작성
    const handleSubmit = async () => {
        if (title.trim() === '' || content.trim() === '' || userId.trim() === '') return;

        await fetch(`http://127.0.0.1:8000/posts?title=${title}&content=${content}&user_id=${userId}`, {
            method: 'POST'
        });

        setTitle('');
        setContent('');
        setUserId('');
        fetchPosts();
    };

    return (
        <div className="sjhun" id="board">
            <div className="board-title">게시판</div>

            <div className="write-area">
                <input
                    className="input-title"
                    placeholder="유저 ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    className="input-title"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="input-content"
                    placeholder="내용을 입력하세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button className="submit-btn" onClick={handleSubmit}>전송</button>
            </div>

            <div className="post-list">
                {posts.length === 0 && <div className="no-post">게시글이 없습니다</div>}
                {posts.map((post) => (
                    <div className="post-item" key={post.id}>
                        <div className="post-header">
                            <span className="post-title">{post.title}</span>
                            <span className="post-date">{post.user_id}</span>
                        </div>
                        <div className="post-content">{post.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HunMenu;