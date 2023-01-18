import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Security',
    href: '#',
  },
  {
    text: 'Setup guide',
    href: '../',
  },
  {
    text: 'Step 3: view alerts',
  },
];

const STEPNUMBER = 3;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
};

const Alerts = () => {
  return (
    <StepPlaceholder
      title="View Alerts"
      breadcrumbs={BREADCRUMBS}
      section="Security"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default Alerts;
