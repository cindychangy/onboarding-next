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
    text: 'Step 2: tour Elastic observability',
  },
];

const STEPNUMBER = 2;

const COMPLETED_STEPS = {
  'step-1': 'done',
};

const Alert = () => {
  return (
    <StepPlaceholder
      title="Tour Elastic Observability"
      breadcrumbs={BREADCRUMBS}
      section="Observability"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default Alert;
