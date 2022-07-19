import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LodingSpinner from "../../component/common/LodingSpinner";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [attendances, setAttendances] = useState([]);
    const [isListOpen, setListOpen] = useState(true);

    useEffect(() => {
        axios
            .get("/testsRouter/findLogs")
            .then((response) => {
                let temp = [];
                if (response.data != null) {
                    temp = response.data;
                    temp.map((log) => {
                        log["time"] = koreanTime(log.time); //로그의 모든 시간을 한국 시간으로 변경 후 저장
                    }); //서버쪽에서 실수로 영국시간 받고 있었어서 부득이하게 이렇게 조치함
                }
                setData(temp); //로그를 data state에 저장
                setUser([]); //혹시 몰라서 user를 한번 비워줌 (전에 핫 리프레시 하다가 몇 번 버그 생겼어서 이렇게 함)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let temp = []; //user 배열을 만들어주기 위한 임시 변수
        let user_set = new Set(); //user_id의 집합을 얻기 위한 임시 변수
        data.map((log) => {
            user_set.add(log.user_id); //로그를 모조리 뒤져서 user_set에 중복 없이 아이디를 수집함
        });
        user_set.forEach((id) => { //중복 없는 아이디 전원에게 다음과 같은 json을 부여함
            temp.push({ //부여한 json은 temp에 계속 push 해줌
                user_id: id, //user 아이디랑
                visited_date: new Set(), //set 함수 하나
            });
        });
        data.map((log) => { //다시 로그를 모조리 뒤져서
            const index = temp.findIndex((item) => item.user_id == log.user_id); //현재 뒤지고 있는 로그의 사용자 아이디와, 위 temp 리스트의 사용자 아이디가 일치하는 곳을 찾는다
            temp[index].visited_date = temp[index].visited_date.add(yymmdd(log.time)); //해당 temp 위치에 있는 사용자 아이디에 있는 visited_date에 현재 뒤지고 있는 로그의 한국 시간 넣는 것을 시도해봄 (단, visited_date는 set함수이기 때문에 중복이라면 아무런 일이 일어나지 않는다.)
        });
        setUser(temp); // 이렇게 완성된 temp는 곧, user의 정보와 동일하므로 저장
    }, [data]); //data state가 변경되는 이후에만 동작함

    const yymmdd = (t) => {
        const date = t.split(". ");
        return date[0] + "-" + date[1] + "-" + date[2];
    };

    const koreanTime = (t) => {
        const dateNum = Date.parse(t);
        const date = new Date(dateNum).toLocaleString();
        return date;
    };

    const options = {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0, //y축 최소값 설정
                        stepSize: 1, //y축 한 칸당 수치
                    },
                },
            ],
        },
        maintainAspectRatio: true,
    };

    const datachart = {

        //각 막대별 라벨
        labels: user.map((user)=>user.user_id),
        datasets: [
            {
                borderWidth: 1, // 테두리 두께
                data: user.map((user)=>user.visited_date.size * 2), // 수치
                backgroundColor: [
                    "rgba(62, 121, 37)",
                    "rgba(132, 150, 53)",
                    "rgba(180, 203, 51)",
                    "rgba(246, 199, 75)",
                    "rgba(242, 231, 151)",
                    "rgba(199, 130, 61)",
                    "rgba(227, 125, 78)",
                ],
            },
        ],
    };

    return (
        <>
            <div>
                <h1>포인트 계산기</h1>
                <div className="my-3">
                    <div className="my-3">
                        <h3>그래프</h3>
                        <Bar data={datachart} width={300} height={200} options={options} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <h3>유저별 포인트</h3>
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                onClick={() => setListOpen(!isListOpen)}
                            >
                                {isListOpen ? "닫기▵" : "펼치기▿"}
                            </button>
                        </h2>
                    </div>
                    <div>
                        {user.length > 0 ? (
                            user.map((user) => (
                                <div key={user.user_id} className=" my-2">
                                    <div className="d-flex justify-content-between">
                                        <h4>
                                            [
                                            <Link className="" to={"/user/" + user.user_id}>
                                                {user.user_id}
                                            </Link>
                                            ]
                                        </h4>
                                        <h4>총 {user.visited_date.size * 2}점</h4>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-item">
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <div>
                                                        {Array.from(user.visited_date).map((d) => (
                                                            <div>{d} (+2점)</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                        ) : (
                            <LodingSpinner />
                        )}
                    </div>
                </div>
                <h3>출석부</h3>
                <div>ㅇㅇ</div>
                <h3>전체 로그</h3>
                <div>
                    {data.length > 0 ? (
                        data.map((log) => (
                            <div key={log.secure_num}>
                                {log.secure_num} {log.time}{" "}
                                <Link to={"/user/" + log.user_id}>{log.user_id}</Link>{" "}
                            </div>
                        ))
                    ) : (
                        <LodingSpinner />
                    )}
                </div>
            </div>
        </>
    );
};
