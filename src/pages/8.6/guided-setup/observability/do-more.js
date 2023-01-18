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
    text: 'Step 4: do more with Elastic observability',
  },
];

const STEPNUMBER = 4;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
  'step-3': 'done',
};

const DoMore = () => {
  return (
    <StepPlaceholder
      title="Do more with Elastic Observability"
      breadcrumbs={BREADCRUMBS}
      section="Observability"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
      hasTour
    />
  );
};

export default DoMore;
