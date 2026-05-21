# main.py
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 게시글 json에서 불러오는 함수
def load_posts():
    with open("posts.json", "r", encoding="utf-8") as f:
        return json.load(f)

# 게시글 json에 저장하는 함수
def save_posts(posts):
    with open("posts.json", "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=4)

# 게시글 목록 반환
@app.get("/posts")
def get_posts():
    return load_posts()

# 게시글 값 받아와 저장
@app.post("/posts")
def create_post(title: str, content: str, user_id: str):
    posts = load_posts()
    new_post = {"id": len(posts) + 1, "title": title, "content": content, "user_id": user_id}
    posts.append(new_post)
    save_posts(posts)
    return new_post

# 시작을 위한 코드
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)