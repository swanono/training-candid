import {Step, Stepper, StepLabel } from '@material-ui/core/';
import  {   StyledH2, StyledConnector, StyledP } from './PersonalStepper.styled';
import {Step as IStep} from  'interfaces/Step.interface';
import { red } from '@material-ui/core/colors';



export const PersonalStepper = ({steps}: {steps: IStep[]}) => {

    const stepsElement = [];
    steps.forEach( step => {
        stepsElement.push(
            <Step key={step.title} active>
                    <StepLabel>                   
                            <StyledH2>{step.title}</StyledH2>
                            <StyledP>{step.text}</StyledP>
                    </StepLabel>
            </Step>
        )
    })

    return (
        <>
            <Stepper activeStep={0} alternativeLabel connector={<StyledConnector  />}>
                {stepsElement}
            </Stepper>
      </>
    )
}