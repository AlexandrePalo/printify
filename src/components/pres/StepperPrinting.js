import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginRight: theme.spacing.unit
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  completed: {
    display: 'inline-block'
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
})

function getSteps() {
  return ['Loading', 'Heating', 'Printing', 'Finish']
}

class StepperPrinting extends Component {
  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set()
  }

  totalSteps = () => {
    return getSteps().length
  }

  isStepComplete(step) {
    return this.state.completed.has(step)
  }

  completedSteps() {
    return this.state.completed.size
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps() - this.skippedSteps()
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1
  }

  isStepOptional = step => {
    return step === 1
  }

  isStepSkipped(step) {
    return this.state.skipped.has(step)
  }

  skippedSteps() {
    return this.state.skipped.size
  }

  handleNext = () => {
    let activeStep

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed
      // find the first step that has been completed
      const steps = getSteps()
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i))
    } else {
      activeStep = this.state.activeStep + 1
    }
    this.setState({
      activeStep
    })
  }

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    })
  }

  handleStep = step => () => {
    this.setState({
      activeStep: step
    })
  }

  handleComplete = () => {
    const completed = new Set(this.state.completed)
    completed.add(this.state.activeStep)
    this.setState({
      completed
    })
    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== this.totalSteps() - this.skippedSteps()) {
      this.handleNext()
    }
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set()
    })
  }

  render() {
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div>
        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = { completed: this.isStepComplete(index) }
            return (
              <Step key={label} {...props}>
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </div>
    )
  }
}

export default StepperPrinting
