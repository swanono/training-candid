import {Step, Stepper, StepLabel } from '@material-ui/core/';
import  {   StyledH2, StyledH1, StyledP, 
            StyledDiv, StyledArrow, StyledSpan 
        } from './PersonalStepper.styled';
import {Step as IStep} from  'interfaces/Step.interface';



export const PersonalStepper = ({steps}: {steps: IStep[]}) => {

    const stepsElement = [];
    steps.forEach( step => {
        stepsElement.push(
            <Step key={step.title}>
                    <StepLabel>                   
                            <StyledH2>{step.title}</StyledH2>
                            <StyledP>{step.text}</StyledP>
                    </StepLabel>
            </Step>
        )
    })

    return (
        <>
            <Stepper activeStep={0} alternativeLabel>
                {stepsElement}
            </Stepper>
      </>
    )
}