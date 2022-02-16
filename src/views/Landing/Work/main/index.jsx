import React from 'react';
import useMedia from 'use-media';
import Panel from 'components/Panel';
import Separator from 'components/Separator';
import { breakPoints, colors } from 'utils/themes';
import Job from 'views/Landing/Work/job';
import { jobs } from 'views/Landing/Work/constants';
import { InnerPanel, Title } from './styles';

function Work() {
  const isMobile = useMedia({ maxWidth: breakPoints.medium });
  return (
    <Panel
      backgroundColor={colors.cream}
      hPadding={isMobile ? 50 : 75}
      paddingTop={175}
    >
      <InnerPanel>
        <Title isMobile={isMobile}>Software Experience</Title>
        <Separator size={isMobile ? 6 : 12} />
        {jobs.map((job, index) => (
          <React.Fragment key={job.title}>
            {index !== 0 && <Separator size={24} />}
            <Job
              date={job.date}
              description={job.description}
              skills={job.skills}
              title={job.title}
            />
          </React.Fragment>
        ))}
      </InnerPanel>
    </Panel>
  );
}

export { Work };
