import { Box, Card, CardActionArea } from "@mui/material"
import React from "react";
import { useNavigate } from "react-router-dom";

const ResponsiveCard = ({ children, to, actionArea, onClick }) => {
    const navigate = useNavigate();
    return (
        <Card
            sx={{ height: '100%', width: '100%' }}
            onClick={
                () => { to && navigate(to); onClick && onClick(); }
            }
        >
            {
                actionArea
                    ?
                    <CardActionArea
                        sx={{
                            height: '100%',
                            width: '100%',
                            alignItems: 'flex-start',
                            flexGrow: 1,
                            flexDirection: 'column',
                        }}
                    >
                        <Box sx={{
                            p: {
                                xs: 2,
                                sm: 5,
                                md: 5,
                                lg: 5,
                                xl: 5,
                                xxl: 5
                            },
                        }}>
                            {children}
                        </Box>
                    </CardActionArea>
                    :
                    <Box sx={{
                        p: {
                            xs: 2,
                            sm: 5,
                            md: 5,
                            lg: 5,
                            xl: 5,
                            xxl: 5
                        },
                    }}>
                        {children}
                    </Box>
            }
        </Card>
    )
}

export default React.memo(ResponsiveCard);