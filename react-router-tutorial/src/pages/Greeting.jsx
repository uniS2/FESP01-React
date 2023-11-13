import {
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function Greeting() {
  const { name } = useParams();
  //! const [from] = useSearchParams();

  //^ useSearchParams 반환하는 값 = `URLSearchParams`의 인스턴스
  // URLSearchParams: URL의 쿼리 문자열을 다루기 위한 객체. 검색 매개변수들의 모음으로 객체도 가능하다.
  // 설정한 queryParamsInput -> queryParams 반환 (Home.jsx)

  //$ 1. 배열("from=queryParamsInput")을 반환하므로 배열을 분해한다.
  const [searchParams] =
    useSearchParams(); // 인스턴스 할당

  //$ 2. get 메서드를 사용하여 원하는 특정 매개변수인 "from"의 값을 가져온다.
  const from = searchParams.get("from");

  return (
    <div>
      안녕하세요! {name} 난 {from}{" "}
      이에요~
    </div>
  );
}
