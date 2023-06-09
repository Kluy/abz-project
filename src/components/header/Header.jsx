import React from 'react';
import Button from '../button/Button';
import Image from '../image/Image';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Image src="../../images/Logo.svg" alt="Logo" />
      <div className="header__buttons">
        <Button type="yellow" text="Users" />
        <Button type="yellow" text="Sign up" />
      </div>
    </header>
  );
};

export default Header;
