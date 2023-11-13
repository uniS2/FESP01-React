import { getTime } from "./api/getTime";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function App() {
  /*  const [time, setTime] = useState("");
   useEffect(() => {
     getTime("Asia/Seoul").then((data) => {
       setTime(`${data.hour}:${data.minute}:${data.seconds}`);
     });
   }); */

  const seoulTimeZone = "Asia/Seoul";
  const { isPending, error, data } = useQuery(
    {
      queryKey: ['api', 'time', { tz: seoulTimeZone }],
      queryFn: () => getTime(seoulTimeZone),
      staleTime: 1000 * 5,
    }
  )

  const queryClient = useQueryClient();

  const handleClick = () => {
    queryClient.invalidateQueries({ queryKey: ["api"] })
    // mutate('/app/time')
  }

  if (isPending) {
    return (
      <>
        <p>로딩중 ..</p>
      </>)
  }

  if (error) return <>에러 발생 {error.message}</>

  return (
    <div>
      <h1>React Query</h1>
      <p> 지금 시간 : {data.dateTime}</p>
      <button onClick={handleClick}>캐시 무효화</button>
    </div>
  );
}
