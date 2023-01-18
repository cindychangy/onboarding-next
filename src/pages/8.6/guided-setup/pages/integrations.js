import React from 'react';
import {
  EuiPageTemplate,
  EuiTitle,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiHorizontalRule,
} from '@elastic/eui';
import Navbar from '../../../../components/navbar';

const Integrations = () => {
  return (
    <>
      <Navbar
        crumbs={[
          {
            text: 'Home',
          },
        ]}
      />
      <EuiPageTemplate template="empty">
        <EuiTitle size="l">
          <h1>Integrations</h1>
        </EuiTitle>

        <EuiSpacer size="l" />

        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoCloud'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoLogging'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoKibana'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoBeats'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoCloud'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoLogging'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoKibana'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoBeats'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoCloud'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoLogging'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoKibana'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type={'logoBeats'} />}
              title="Integration"
              description="Collect logs and metrics from Kubernetes clusters with Elastic Agent."
              onClick={() => {}}
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiHorizontalRule margin="xxl" />
      </EuiPageTemplate>
    </>
  );
};

export default Integrations;
