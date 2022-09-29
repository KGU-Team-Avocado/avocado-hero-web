import { Badge, Box, Chip, Stack } from "@mui/material";

const RoleBadge = ({findRole, member}) => {
    return (
        // <div>
        //     {member.user_role.map((r) => <span key={r} className="badge text-bg-primary me-1" >{findRole(r).label}</span>)}
        // </div>
        <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0.5}
                mt={1}
            >
            {member.user_role.map((r) =>
                // <Badge color="secondary" badgeContent={findRole(r).label}></Badge>
                <Chip label={findRole(r).label} />
            )}
        </Stack>
    )
}

export default RoleBadge;