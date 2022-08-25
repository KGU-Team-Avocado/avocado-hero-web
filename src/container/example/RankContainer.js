import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LodingSpinner from "../../component/common/LodingSpinner";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const realUser = ["gabrielyoon7", "wlstn", "123", "201912069", "hido", "seeun", "yeonsu"]
    const attendances = {
        "gabrielyoon7": 7,
        "wlstn": 6,
        "123": 2,
        "201912069": 6,
        "hido": 6,
        "seeun": 5,
        "yeonsu": 6
    }  //6월 30일 이후 출석 기록 (백엔드로 만들기 귀찮아서 일단 이렇게 해둠)
    const [sum, setSum] = useState(0);

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
                temp = temp.filter((log)=>realUser.includes(log.user_id))
                setData(temp); //로그를 data state에 저장
                setUser([]); //혹시 몰라서 user를 한번 비워줌 (전에 핫 리프레시 하다가 몇 번 버그 생겼어서 이렇게 함)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let temp = []; //user 배열을 만들어주기 위한 임시 변수
        let user_set = new Set(data.map((log) => log.user_id)); //로그를 모조리 뒤져서 user_set에 중복 없이 아이디를 수집함
        user_set.forEach((id) => { //중복 없는 아이디 전원에게 다음과 같은 json을 부여함
            temp.push({ //부여한 json은 temp에 계속 push 해줌
                user_id: id, //user 아이디랑
                visited_date: new Set(data.filter(log => log.user_id == id).map((log) => yymmdd(log.time))), //중복 없는 날짜를 저장해줄 set 함수 하나
                attendances_times: attendances[id]
            });
        });
        setUser(temp); // 위와 같이 완성된 temp는 곧 user의 정보와 동일하므로 user state에 저장
    }, [data]); //data state가 변경되는 이후에만 동작함

    useEffect(()=>{
        let sum = 0
        user.map((u)=>sum+=(u.attendances_times * 5 + u.visited_date.size * 2))
        setSum(sum)
    }, [user])

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
        labels: user.map((user) => user.user_id),
        datasets: [
            {
                borderWidth: 1, // 테두리 두께
                data: user.map((user) => user.attendances_times * 5 + user.visited_date.size * 2), // 수치
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
                        <Bar data={datachart} height={100} options={options} />
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
                    <p>대면 회의 출석 횟수 기준일 : 2022-08-25</p>
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
                                        <h4>총 {user.attendances_times * 5 + user.visited_date.size * 2}점</h4>
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
                                                        <div>- 대면 회의 출석 횟수 {user.attendances_times}회 (+{user.attendances_times * 5}점)</div>
                                                        {Array.from(user.visited_date).map((d) => (
                                                            <div>- {d} (+2점)</div>
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
                <h3>장학금 예상 수령 금액</h3>
                <div>
                    {
                        user.length > 0
                            ?
                            (
                                user.map((user) => <div>{user.user_id +" : "+ parseInt((user.attendances_times * 5 + user.visited_date.size * 2)/sum*(400000+(8*100000)+300000))+"원"}</div>)
                            )
                            :
                            (
                                <div>데이터가 없습니다.</div>
                            )}
                </div>
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
