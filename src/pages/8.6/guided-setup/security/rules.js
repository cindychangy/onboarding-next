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
    text: 'Step 2: turn on rules',
  },
];

const STEPNUMBER = 2;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
};

const Rules = () => {
  return (
    <StepPlaceholder
      title="Turn on rules"
      breadcrumbs={BREADCRUMBS}
      section="Security"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default Rules;
