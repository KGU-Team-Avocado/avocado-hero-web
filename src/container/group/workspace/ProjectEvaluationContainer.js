import { useParams } from "react-router-dom";

const ProjectEvaluationContainer = () => {
    const params = useParams();
    const project_id = params.id;

    return (
        <>
            평가내용나옴
        </> 
    )
}

export default ProjectEvaluationContainer;