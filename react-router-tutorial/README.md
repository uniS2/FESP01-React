# react-router-tutoral

React Router 라이브러리 학습 공간입니다.

- 수업 자료 GitHub URL: https://github.com/uzoolove/FESP01-javascript
- 학습 저장소 GitHub URL: https://github.com/uniS2/FESP-TS.git

<br/>

## 학습 내용 📑

- [index.js](/react-router-tutorial/src/index.js): **creating a `Router`**

  - `import React from 'react';` 문을 생략해도 되는 이유
  - `Link`를 통한 liking/submitting to pages
  - 중첩 라우트(Nested Routes): 객체 사용 `children`
  - 동적 세그먼트(Dynamic Segments): 경로값 이용
  - `RouterProvider` 설정

<br>

- [Root.jsx](/react-router-tutorial/src/pages/Root.jsx)

  - 컴포넌트 분리: `NavBar`
  - `Outlet` 설정

<br>

- [NavBar.jsx](/react-router-tutorial/src/components/NavBar.jsx)
  - `<Link to ="" />`
  - `NavLink` Active Links
    ```jsx
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive
            ? "red"
            : "black",
        };
      }}
      to="/"
    />
    ```

<br>

- [Home.jsx](/react-router-tutorial/src/pages/Home.jsx)
  - `useSearchParams` 훅 사용
  - `useSearchParams`: 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정할 수 있다.

<br>

- [Greeting.jsx](/react-router-tutorial/src/pages/Greeting.jsx)
  - `useParmas()` 훅과 `useSearchParams` 이용하여 경로를 반환하고 화면에 출력한다.

<br>

- [About.jsx](/react-router-tutorial/src/pages/About.jsx), [ErrorNotFound.jsx](/react-router-tutorial/src/pages/ErrorNotFound.jsx): 컴포넌트 반환
