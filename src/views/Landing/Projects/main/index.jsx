import React, { useState } from 'react';
import useMedia from 'use-media';
import hillsbetsLogo from 'assets/hillsbets-logo.png';
import mtgLogo from 'assets/mtg-logo.jpeg';
import chatLogo from 'assets/chat-logo.svg';
import chessLogo from 'assets/chess-logo.svg';
import flickrLogo from 'assets/flickr-logo.svg';
import Panel from 'components/Panel';
import Separator from 'components/Separator';
import ProjectButton from 'views/Landing/Projects/project-button';
import ProjectDescription from 'views/Landing/Projects/project-description';
import { breakPoints, colors } from 'utils/themes';
import { Content, InnerPanel, Title } from './styles';

function Projects() {
  const [project, setProject] = useState('hillsbets');
  const isMobile = useMedia({ maxWidth: breakPoints.medium });
  const isTablet = useMedia({ maxWidth: breakPoints.large });
  return (
    <Panel
      backgroundColor={colors.cream}
      hPadding={isMobile ? 50 : 75}
      paddingTop={175}
      paddingBottom={175}
    >
      <InnerPanel>
        <Title isMobile={isMobile}>Personal Projects</Title>
        <Separator size={isTablet ? 6 : 12} />
        <Content>
          {!isTablet && (
            <React.Fragment>
              <div>
                <ProjectButton
                  logo={hillsbetsLogo}
                  onClick={() => setProject('hillsbets')}
                  selected={project === 'hillsbets'}
                  text="Hillsbets"
                />
                <Separator size={4} />
                <ProjectButton
                  isRoundLogo={false}
                  logo={flickrLogo}
                  onClick={() => setProject('flickr')}
                  selected={project === 'flickr'}
                  text="Flickr Search"
                />
                <Separator size={4} />
                <ProjectButton
                  isRoundLogo={false}
                  logo={chatLogo}
                  onClick={() => setProject('chat')}
                  selected={project === 'chat'}
                  text="Chat App"
                />
                <Separator size={4} />
                <ProjectButton
                  logo={mtgLogo}
                  onClick={() => setProject('mtg')}
                  selected={project === 'mtg'}
                  text="MTG Life Tracker"
                />
                <Separator size={4} />
                <ProjectButton
                  logo={chessLogo}
                  onClick={() => setProject('chess')}
                  selected={project === 'chess'}
                  text="Chess"
                />
              </div>
              <Separator size={20} />
            </React.Fragment>
          )}
          {project === 'hillsbets' && (
            <ProjectDescription
              description="A cryptocurrency dashboard with all the latest market information,
              rankings and charts. The purpose of this website was to make it
              easy for visitors to bookmark coins, view top gainers and losers,
              and keep track of trending coins over a period of time without the
              need to create an account."
              image="/images/hillsbets-demo.png"
              link="https://hillsbets.vercel.app"
              nextProject={() => setProject('flickr')}
              project="Hillsbets"
            />
          )}
          {project === 'flickr' && (
            <ProjectDescription
              description="This application utilises the Flickr public feed api to return public
              content matching the search criteria. The purpose of this website was to redesign 
              Flickr's current UI of displaying images and additional details. Particular focus was
              placed on ensuring photos could be displayed in their optimal ratio and size."
              image="/images/flickr-demo.png"
              link="https://flickr-public-feed.onrender.com/"
              nextProject={() => setProject('chat')}
              project="Flickr Search"
            />
          )}
          {project === 'chat' && (
            <ProjectDescription
              description="This application allows anonymous users to send real time messages via the 
              browser if they happen to be on at the same time. Particular focus was placed on making it
              easy to send messages and add emoticons. The user interface and design of this application is 
              inspired from that of Facebook messenger."
              image="/images/chat-demo.png"
              link="https://richardjzhang-chat-app.herokuapp.com"
              nextProject={() => setProject('mtg')}
              project="Chat App"
            />
          )}
          {project === 'mtg' && (
            <ProjectDescription
              description="A life counter for the trading card game Magic: The Gathering. 
              This app works for 2 - 4 players and allows players to keep track of 
              their life total as well as edit the number of starting life points. This app
              is also compatible with other card and board games."
              image="/images/mtg-demo.png"
              link="https://mtg-life-counter-pink.vercel.app/"
              nextProject={() => setProject('chess')}
              project="MTG Life Tracker"
            />
          )}
          {project === 'chess' && (
            <ProjectDescription
              description="A simple chess bot with different modes of difficulty.
              This app allows a player to test their skills against a relatively 
              difficult chess bot. You can also watch two 'dumb' chess bots play
              against each other!"
              image="/images/chess-demo.png"
              link="http://chess.richardjzhang.com/"
              nextProject={() => setProject('hillsbets')}
              project="Chess"
            />
          )}
        </Content>
      </InnerPanel>
    </Panel>
  );
}

export { Projects };
