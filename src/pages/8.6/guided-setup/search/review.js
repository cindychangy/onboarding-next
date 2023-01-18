import React from 'react';
import StepPlaceholder from '../../../../components/step_placeholder';

const BREADCRUMBS = [
  {
    text: 'Search',
    href: '#',
  },
  {
    text: 'Setup guide',
    href: '../../',
  },
  {
    text: 'Step 4: review analytics',
  },
];

const STEPNUMBER = 4;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
  'step-3': 'done',
};

const ReviewAnalytics = () => {
  return (
    <StepPlaceholder
      title="Review your search analytics"
      breadcrumbs={BREADCRUMBS}
      section="Search"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
      hasTour
    />
  );
};

export default ReviewAnalytics;
