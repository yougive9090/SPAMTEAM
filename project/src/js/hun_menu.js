import './hun_menu.css';
import { useState } from 'react';

function HunMenu() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (title.trim() === '' || content.trim() === '') return;
        
        const newPost = {
            id: Date.now(),
            title: title,
            content: content,
            date: new Date().toLocaleDateString()
        };
        
        setPosts([newPost, ...posts]);
        setTitle('');
        setContent('');
    };

    return (
        <div className="sjhun">
            <div className="board-title">게시판</div>
            
            <div className="write-area">
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
                            <span className="post-date">{post.date}</span>
                        </div>
                        <div className="post-content">{post.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HunMenu;