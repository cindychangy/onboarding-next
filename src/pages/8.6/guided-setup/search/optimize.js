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
    text: 'Step 3: search experience',
  },
];

const STEPNUMBER = 3;

const COMPLETED_STEPS = {
  'step-1': 'done',
  'step-2': 'done',
};

const OptimizeRelevance = () => {
  return (
    <StepPlaceholder
      title="Optimize your search relevance"
      breadcrumbs={BREADCRUMBS}
      section="Search"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default OptimizeRelevance;
