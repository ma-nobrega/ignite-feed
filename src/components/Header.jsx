import { header } from './Header.module.css';

import IgniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={header}>
      <img src={IgniteLogo} alt="logo ignite logo" />
      <strong >Ignite Feed</strong>
    </header>
  );
}