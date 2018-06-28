import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

class StepperPrinting extends Component {
  isStepComplete(index) {
    return this.props.completed.includes(index)
  }

  render() {
    return (
      <div>
        <Stepper alternativeLabel nonLinear activeStep={this.props.activeStep}>
          {this.props.steps.map((label, index) => {
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
