const RoleBadge = ({findRole, member, selected, editWho}) => {
    return (
        <div>
            {member.description.map((r) => <span key={r} className="badge text-bg-primary me-1" >{findRole(r).label}</span>)}
            <div className="mt-2 d-flex justify-content-end">
                <button type="button" className="btn btn-secondary me-2" onClick={() => editWho(member.user_id)} >수정</button>
            </div>
        </div>
    )
}

export default RoleBadge;