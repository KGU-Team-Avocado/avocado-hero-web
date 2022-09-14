import { CardMembership } from "@mui/icons-material"
import TechStack from "../../common/TechStack"


export default (props) => {

    return (
        <div className="col">
            <a href="#" className="text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#group_join" onClick={() => props.setSelectedGroup(props.group)}>
                <div className="card p-3 rounded-4">
                    <div className="row">
                        <div className="col-xxl-8 py-xxl-3">
                            
                            <div>
                                
                                    {props.group.members.map((members)=> members.user_role)}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}