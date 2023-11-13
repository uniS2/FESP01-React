import { useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export default function Home() {
  const [params, setParams] =
    useState("");

  const [
    queryParamsInput,
    setQueryParamsInput,
  ] = useState("");

  //^ useSearchParams: 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정.
  //^ only for the search portion of the URL
  //^ `setSearchParams` 지원: 기능 업데이트 -> 반환 함수 `searchParams`
  const [queryParams, setQueryParams] =
    useSearchParams();

  //# 1 리액트 라우터에서는 Link
  //# 2 Navigate
  const navigate = useNavigate();

  // onChange 이벤트
  const handleParamsChange = (e) => {
    setParams(e.target.value);
  };
  const handleQueryParamsChange = (
    e,
  ) => {
    setQueryParamsInput(e.target.value);
  };

  // button - onClick 이벤트
  const handleClick = () => {
    // useState로 설정한 params 변수로 이동
    // index.js에서 설정한 "/greet/:name" 에 해당
    navigate(`/greet/${params}`);

    //^ 검색 매개변수 - 객체 설정
    setQueryParams({
      from: queryParamsInput,
    });
  };

  return (
    <>
      <input
        type="text"
        value={params}
        onChange={handleParamsChange}
        placeholder="Search Params"
      />
      <button onClick={handleClick}>
        환영!
      </button>
      <input
        type="text"
        value={queryParamsInput}
        onChange={
          handleQueryParamsChange
        }
        placeholder="Query Params"
      />
    </>
  );
}
