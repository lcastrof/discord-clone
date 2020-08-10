import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { switchServer } from '../../redux/actions';

import LogoImg from '../../assets/Logo.svg'

import { Button } from './styles';

export interface Props {
  name?: string;
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  name,
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
  const dispatch = useDispatch();

  const handleSwitchServer = useCallback((name) => {
    dispatch(switchServer(name));
  }, [dispatch]);

  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
      onClick={() => handleSwitchServer(name)}
    >
      {isHome && <img src={LogoImg} alt="Rocketseat" />}
    </Button>
  );
}

export default ServerButton;