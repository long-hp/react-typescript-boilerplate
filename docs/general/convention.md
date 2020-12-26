# Convention

Cách làm việc với file

- actionTodolist.ts ( không nên viết action.todolist.ts) tương tự cho reducers và saga
- Tên file component nên viết theo camel case ( ví dụ: HomePage )
- Các component props quá nhiều nên phân tách ra thành các phần ( ví dụ Post, Post.Header, Post.Body...). Hỏi thêm mọi người nếu chưa rõ
  cách làm.
- interface prop nên nhớ phải export ra ( ví dụ: export interface ProductProps ... )
- Dùng [jsdoc](https://jsdoc.app/) để comment cho các prop trong interface ví dụ:

```JSX
  export interface AvatarProps extends Pick<ViewProps, 'radius' | 'className'> {
    /** Kích thước của avatar */
    size?: number;
    /** Tên user */
    name?: string;
    /** Avatar uri */
    uri?: string;
  }
```
