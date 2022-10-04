// import Accordion from 'react-bootstrap/Accordion';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const NoticeAcordion = ({ notices, deleteNotice, showModifyModal, user, groupMgr }) => {
    return (
      <Box>
        {notices.map((notice) => (
          <Accordion>
            <AccordionSummary>
              <Typography>{notice.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{notice.description}</Typography>
              {user.user_id === groupMgr
                ?
                <Grid container columnSpacing={2} sx={{ order: { xs: 1, sm: 2 } }}>
                  <Grid xs display="flex" justifyContent="end" alignItems="end">
                    <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => showModifyModal(notice)} >
                      <EditIcon />
                    </IconButton>
                  </Grid>
                  <Grid display="flex" justifyContent="end" alignItems="end">
                    <IconButton color="error" aria-label="upload picture" component="label" onClick={() => deleteNotice(notice._id)} >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                : null}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    )
}

export default NoticeAcordion;