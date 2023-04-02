/** @jsxImportSource @emotion/react */
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiSpacer,
  EuiTitle,
  EuiText,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiCard,
  EuiButton,
  EuiPageTemplate,
  useEuiTheme,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana';
import { GUIDE_DATA } from '../../../constants/guided-setup.data';
import { GuideContext } from '../../../context/guide';

const GuidedSetup = () => {
  const { euiTheme } = useEuiTheme();
  const router = useRouter();
  const [section, setSection] = useState('Observability');
  const [activeFilter, setActiveFilter] = useState('All');
  const [guideIndex, setGuideIndex] = useState(0);

  const { guideOpen, setGuideOpen } = useContext(GuideContext);

  const guideCard = css`
    position: relative;
    min-height: 110px;
    width: 380px;

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
    padding: 0 18px !important;
    height: 32px !important;
    background: ${euiTheme.colors.buttonText} !important;

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
    background: ${euiTheme.colors.darkestShade} !important;
    color: #fff !important;
  `;

  const hideGuide = css`
    background: #f7f8fc;
    box-shadow: none;
    border: 1px solid ${euiTheme.colors.lightShade};
  `;

  const showGuide = css`
    background: #fff;
    box-shadow: 0 0.9px 4px -1px rgb(0 0 0 / 8%),
      0 2.6px 8px -1px rgb(0 0 0 / 6%), 0 5.7px 12px -1px rgb(0 0 0 / 5%),
      0 15px 15px -1px rgb(0 0 0 / 4%);
    border: none;
  `;

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
    setGuideOpen(!guideOpen);
    setGuideIndex(index);

    if (section) {
      setSection(section);
    }
  };

  return (
    <KibanaLayout
      template="empty"
      breadcrumbs={BREADCRUMBS}
      section={section}
      onClick={() => handleGuideClick(section)}
      completedSteps={COMPLETED_STEPS}
      guideIndex={guideIndex}>
      <EuiSpacer size="m" />
      <EuiPageTemplate style={{ paddingBlockStart: 0 }} paddingSize="l">
        <EuiPageTemplate.Section color="subdued">
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
            <EuiFlexGroup wrap responsive justifyContent="center">
              {GUIDE_DATA.map((guide, index) => (
                <EuiFlexItem key={index} grow={false}>
                  <EuiCard
                    css={[
                      guideCard,
                      guide.section !== activeFilter && hideGuide,
                      activeFilter === 'All' && showGuide,
                    ]}
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
            </EuiFlexGroup>
          </div>
          <EuiSpacer size="l" />
          <EuiText size="s" textAlign="center">
            <EuiButtonEmpty
              iconSide="right"
              onClick={() => router.push('kibana')}>
              I'd like to do something else (skip)
            </EuiButtonEmpty>
          </EuiText>
        </EuiPageTemplate.Section>
      </EuiPageTemplate>
    </KibanaLayout>
  );
};

export default GuidedSetup;
