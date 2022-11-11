import { options } from '../../assets/tag/Tech'

const TechStack = (props) => {
    //사용된 tech 기술 번호만 넘겨서 해당하는 것만 return 해줄 계획으로 만듦
    const findTech = (t) => {
        const idx = options.findIndex((tech)=>tech.value===t)
        return options[idx]
    }

    return (
        <div>
            {props.tech_stack.map((t)=><span key={t} className="badge me-1" style={{"backgroundColor":findTech(t).bgColor, "color":findTech(t).txtColor}}>{findTech(t).label}</span>)}
        </div>
    )
}

export default TechStack;