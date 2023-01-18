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
    text: 'Step 2: search experience',
  },
];

const STEPNUMBER = 2;

const COMPLETED_STEPS = {
  'step-1': 'done',
};

const SearchExperience = () => {
  return (
    <StepPlaceholder
      title="Build a search experience"
      breadcrumbs={BREADCRUMBS}
      section="Search"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default SearchExperience;
