import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MKButton from 'component/common/mui-components/MKButton';

const steps = [
    {
        label: '조직을 생성하세요',
        description: `조직을 생성하시면 비밀스러운 전용 코드를 부여해드립니다. 이 코드를 조직원들에게만 공유하세요`,
    },
    {
        label: '조직 내 그룹을 형성하세요',
        description:
            '조직 코드를 가지고 조직원들끼리 알아서 팀을 형성하도록 해주세요. 정원이나 최대 팀 수를 미리 공지하는 것도 한 가지 방법입니다.',
    },
    {
        label: '조직에 속한 그룹을 감시하세요',
        description: `조직 코드와 함께 생성된 그룹들은 이 계정에서 감시할 수 있습니다.`,
    },
];

export default function OrganizationContainer() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box>
            <Stepper
                activeStep={activeStep}
                orientation="vertical"
                sx={{ backgroundColor: "#000000" }}
            >
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <MKButton
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </MKButton>
                                    <MKButton
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </MKButton>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <MKButton onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </MKButton>
                </Paper>
            )}
        </Box>
    );
}