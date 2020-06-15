import {Step, Stepper, StepLabel, Orientation } from '@material-ui/core/';
import  {   StyledH2, StyledConnector, StyledP, StyledStepLabel } from './PersonalStepper.styled';
import {Step as IStep} from  'interfaces/Step.interface';
import { red } from '@material-ui/core/colors';



export const PersonalStepper = ({steps, orientation= 'horizontal'}: {steps: IStep[], orientation?: Orientation}) => {

    const stepsElement = [];
    steps.forEach( step => {
        stepsElement.push(
            <Step key={step.title} active>
                    <StyledStepLabel >                   
                            <StyledH2>{step.title}</StyledH2>
                            <StyledP>{step.text}</StyledP>
                    </StyledStepLabel>
            </Step>
        )
    })

    return (
        <>
            <Stepper activeStep={0} alternativeLabel orientation={orientation} connector={<StyledConnector  />}>
                {stepsElement}
            </Stepper>
      </>
    )
}