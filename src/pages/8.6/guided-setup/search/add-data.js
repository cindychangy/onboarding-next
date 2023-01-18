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
    text: 'Step 1: add data',
  },
];

const STEPNUMBER = 1;

const COMPLETED_STEPS = {};

const AddData = () => {
  return (
    <StepPlaceholder
      title="Add data"
      breadcrumbs={BREADCRUMBS}
      section="Search"
      stepNumber={STEPNUMBER}
      completedSteps={COMPLETED_STEPS}
      hasSidebar
    />
  );
};

export default AddData;
