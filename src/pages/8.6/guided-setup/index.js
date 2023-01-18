/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiSpacer,
  EuiTitle,
  EuiText,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiCard,
  EuiButton,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana';
import { GUIDE_DATA } from '../../../constants/guided-setup.data';

const guideCard = css`
  .euiCard__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const filterButton = css`
  border-radius: 20px !important;
  min-width: 0 !important;
  padding: 0 8px !important;
  height: 32px !important;
  background: #e9edf3 !important;

  &:hover {
    text-decoration: none !important;
    transform: none !important;
    transition: none !important;
  }

  &:focus {
    text-decoration: none;
  }
`;

const activeFilterFill = css`
  background: #343741 !important;
  color: #fff !important;
`;

const hideGuide = css`
  display: none;
`;

const showAllGuides = css`
  display: flex !important;
`;

const GuidedSetup = () => {
  const router = useRouter();
  const [guideOpen, setGuide] = useState(false);
  const [section, setSection] = useState('Observability');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [newUserStartPage, setNewUserStartPage] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [guideIndex, setGuideIndex] = useState(0);

  const BREADCRUMBS = [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'Setup guide',
    },
  ];

  let COMPLETED_STEPS = {};

  const handleGuideClick = (section, index) => {
    setGuide(!guideOpen);
    setButtonDisabled(!buttonDisabled);
    setGuideIndex(index);

    if (section) {
      setSection(section);
      setNewUserStartPage(true);
    }
  };

  return (
    <KibanaLayout
      template="empty"
      breadcrumbs={BREADCRUMBS}
      guideOpen={guideOpen}
      section={section}
      buttonDisabled={buttonDisabled}
      onClick={() => handleGuideClick(section)}
      completedSteps={COMPLETED_STEPS}
      newUserStartPage={newUserStartPage}
      guideIndex={guideIndex}>
      <EuiSpacer size="m" />
      <div
        css={css`
          padding: 10px 10px 0;
        `}>
        <EuiTitle size="l" className="eui-textCenter">
          <h1>What would you like to do&nbsp;first?</h1>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiText color="text" size="m" textAlign="center">
          <p>Select an option below and we'll help you get started</p>
        </EuiText>
        <EuiSpacer size="l" />

        <div>
          <EuiSpacer size="l" />
          <EuiFlexGroup justifyContent="center" gutterSize="s">
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={() => setActiveFilter('All')}
                color="text"
                css={[
                  filterButton,
                  activeFilter === 'All' && activeFilterFill,
                ]}>
                All
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={() => setActiveFilter('Search')}
                color="text"
                css={[
                  filterButton,
                  activeFilter === 'Search' && activeFilterFill,
                ]}>
                Search
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={() => setActiveFilter('Observability')}
                color="text"
                css={[
                  filterButton,
                  activeFilter === 'Observability' && activeFilterFill,
                ]}>
                Observability
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={() => setActiveFilter('Security')}
                color="text"
                css={[
                  filterButton,
                  activeFilter === 'Security' && activeFilterFill,
                ]}
                key="security">
                Security
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="xxl" />
          <EuiFlexGrid
            columns={3}
            gutterSize="l"
            style={{ justifyContent: 'center' }}>
            {GUIDE_DATA.map((guide, index) => (
              <EuiFlexItem
                key={index}
                css={[
                  guide.section !== activeFilter && hideGuide,
                  activeFilter === 'All' && showAllGuides,
                ]}>
                <EuiCard
                  style={{ position: 'relative', minHeight: '100px' }}
                  css={guideCard}
                  onClick={() => handleGuideClick(guide.section, index)}
                  title={
                    <>
                      <EuiSpacer size="s" />
                      <h3 style={{ fontWeight: 600 }}>{guide.title}</h3>
                    </>
                  }
                  titleSize="xs"
                  betaBadgeProps={{
                    label: guide.section,
                  }}
                  // children={
                  //   <EuiFlexGroup>
                  //     <EuiFlexItem>
                  //       <EuiBadge
                  //         color="hollow"
                  //         iconType={
                  //           (guide.section === 'Search' &&
                  //             'logoElasticsearch') ||
                  //           (guide.section === 'Observability' &&
                  //             'logoObservability') ||
                  //           (guide.section === 'Security' && 'logoSecurity')
                  //         }
                  //         iconSide="left"
                  //         style={{
                  //           padding: '5px',
                  //           borderRadius: '24px',
                  //           padding: '2px 12px',
                  //           fontSize: '0.8571rem',
                  //           lineHeight: '24px',
                  //           border: '1px solid rgb(211 218 230)',
                  //           fontWeight: '700',
                  //           textTransform: 'uppercase',
                  //           letterSpacing: '0.05em',
                  //           position: 'absolute',
                  //           insetBlockStart: '0px',
                  //           insetInlineStart: '50%',
                  //           transform: 'translateX(-50%) translateY(-50%)',
                  //           minInlineSize: 'min(30%, 112px)',
                  //           maxInlineSize: 'calc(100% - 32px)',
                  //         }}
                  //       >
                  //         {guide.section}
                  //       </EuiBadge>
                  //     </EuiFlexItem>
                  //   </EuiFlexGroup>
                  // }
                />
                <EuiSpacer size="m" />
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
        </div>
        <EuiSpacer size="l" />
        <EuiText size="s" textAlign="center">
          <EuiButtonEmpty
            iconSide="right"
            onClick={() => router.push('kibana')}>
            I'd like to do something else (skip)
          </EuiButtonEmpty>
        </EuiText>
      </div>
    </KibanaLayout>
  );
};

export default GuidedSetup;
