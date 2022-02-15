import React from 'react';
import Separator from 'components/Separator';
import { borderRadius } from 'utils/themes';
import { Root } from './styles';

const LOGO_SIZE = 28;

function ProjectButton({ logo, onClick, selected, text }) {
  return (
    <Root onClick={onClick} selected={selected}>
      <img
        alt={text}
        src={logo}
        height={LOGO_SIZE}
        width={LOGO_SIZE}
        style={{ borderRadius: borderRadius.circle }}
      />
      <Separator size={3} />
      {text}
    </Root>
  );
}

export default ProjectButton;
