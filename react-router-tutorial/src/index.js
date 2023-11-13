//^ Router 사용을 위한 import
import React from 'react';
//^ import * as React from "react";
// React v17(2020.10.20)에서 이미 React 내부적으로 JSX transformer가 JSX를 React 요소로 변환하는 작업을 거치고 있음을 알 수 있다.
// 공식문서에서는 react 내 모든 객체를 불러오지만 필요한 React 객체만 꺼내 쓰는게 좋다 생각한다! 굳이 필요하지 않는 코드라면 생략하는 것이 베스트
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./pages/Root"
import Home from './pages/Home';
import About from './pages/About';
import ErrorNotFound from './pages/ErrorNotFound';
import Greeting from './pages/Greeting';

// 그 외 import
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//^ creating a `Router`
// DOM History API를 사용한다.
// loaders(루트 element에 data 공급), actions(루트 loader "읽기"를 "쓰기"), getchers(useFetcher: navigating 없이 actions, loaders 가능)과 같은 v6.4 data APIs를 활성화한다.
const router = createBrowserRouter([
  // <Route path="/" element={<Root />}> - 1) use JSX
  {
    path: "/",

    element: <Root />,
    //^ liking/submitting to pages with `Link` and `<Form>`
    // element: <Link to="about" />

    errorElement: <ErrorNotFound />,

    //# Nested Routes(중첩 라우트) - 2) use plain objects
    // https://remix.run/_docs/routing
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      //^ Dynamic Segments `:` - params 이용
      {
        path: "/greet/:name",
        element: <Greeting />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

root.render(
  <React.StrictMode>
    {/* RouterProvider 사용하여 제공 */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
