// types/post.ts
// 게시글 전체 데이터를 표현하는 타입
export interface Post {
  id: number;           // 게시글 고유 ID
  title: string;        // 게시글 제목
  content: string;      // 게시글 내용
  author: string;       // 작성자 이름
  createdAt: string;    // 작성 시간
  updatedAt: string;    // 업데이트 시간
}

// 새 게시글 생성에 필요한 데이터 타입
export interface CreatePostData {
  title: string;        // 제목
  content: string;      // 내용
  author: string;       // 작성자
}

// 게시글 수정에 사용되는 데이터 타입
export interface UpdatePostData {
  title?: string;       // 제목 (선택 필드)
  content?: string;     // 내용 (선택 필드)
  author?: string;      // 작성자 (선택 필드)
}
