const RoleBadge = ({findRole, member}) => {
    return (
        <div>
            {member.user_role.map((r) => <span key={r} className="badge text-bg-primary me-1" >{findRole(r).label}</span>)}
        </div>
    )
}

export default RoleBadge;