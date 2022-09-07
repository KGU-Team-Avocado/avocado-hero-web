import { useParams } from "react-router-dom";

const ProjectEvaluationContainer = () => {
    const params = useParams();
    const project_id = params.id;
    const evaluation_index = [
        {
            label: '질적 공헌도',
            value: 'qualitative_contribution',
            questions: [
                '해당 팀원이 제안한 의견이 실용적이었나요?',
                '해당 팀원이 맡인 역할의 완성도가 높았나요?'
            ]
        },
        {
            label: '양적 공헌도',
            value: 'quantitative_contribution',
            questions: [
                '해당 팀원이 프로젝트 수행에 있어 높은 참여도를 보였나요?',
                '해당 팀원이 높은 회의 출석률을 보였나요?'
            ]
        },
        {
            label: '참여 태도',
            value: 'participation_attitude',
            questions: [
                '팀에 헌신적인 모습을 보였나요?',
                '해당 팀원과의 의사소통이 잘 됐나요?',
                '다른 팀원의 의견을 존중하는 태도를 보였나요?'
            ]
        },
        {
            label: '책임감',
            value: 'responsibility',
            questions: [
                '자신이 맡은 업무를 주어진 기간 내에 수행하였나요?',
                '회의 시간을 엄수하였나요?'
            ]
        },
        {
            label: '적합성',
            value: 'compatibility',
            questions: [
                '이 팀원과 다시 팀으로 만나 프로젝트를 진행하고싶나요?'
            ]
        },
    ]
    const score = [
        {
            label: '매우 동의',
            value: '100',
        },
        {
            label: '동의',
            value: '75',
        },
        {
            label: '보통',
            value: '50',
        },
        {
            label: '비동의',
            value: '25',
        },
        {
            label: '매우 비동의',
            value: '0',
        },
    ]

    return (
        <div className="mt-3">
            {evaluation_index.map((evaluation) => 
                <div className="mb-5" key={evaluation.value}>
                    <h1>{evaluation.label}</h1>
                    <hr />
                    {evaluation.questions.map((question, idx) =>
                        <div className="mb-3" key={idx}>
                            <h3>{question}</h3>
                            {score.map((s, index) =>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name={evaluation.value + '_' + idx} id={"inlineRadio"+index} value={s.label} />
                                    <label className="form-check-label" for={"inlineRadio"+index}>{s.label}</label>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
            <div class="d-grid gap-2 col-4 mx-auto mb-4">
                <button class="btn btn-primary" type="button">저장</button>
            </div>
        </div> 
    )
}

export default ProjectEvaluationContainer;