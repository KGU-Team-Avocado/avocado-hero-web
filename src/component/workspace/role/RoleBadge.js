import { Badge, Box, Chip, Stack } from "@mui/material";

const RoleBadge = ({findRole, member}) => {
    return (
        <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0.5}
                mt={1}
            >
            {member.user_role.map((r) =>
                <Chip label={findRole(r).label} />
            )}
        </Stack>
    )
}

export default RoleBadge;