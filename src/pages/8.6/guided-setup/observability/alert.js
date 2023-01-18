import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Observability',
    href: '#',
  },
  {
    text: 'Setup guide',
    href: '../',
  },
  {
    text: 'Step 3: create an alert',
  },
];

const STEPNUMBER = 3;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
};

const Alert = () => {
  return (
    <StepPlaceholder
      title="Create an Alert"
      breadcrumbs={BREADCRUMBS}
      section="Observability"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default Alert;
