import React from 'react';
import './Header.scss';

import Card from '../Card/Card';
import Title from '../Title/Title';

const Header = () => {
  return (
    <>
      <Title>Транспорт</Title>
      <div className="wrap">
        <Card name="Велосипед" image="/velosiped.jpg" />
        <Card name="Мотобайк" image="https://a.d-cd.net/412ddeu-960.jpg" />
        <Card name="Урал М-62" image="https://avatars.mds.yandex.net/i?id=62eb851463219fc3cbb36dad9244e6bb_l-4571964-images-thumbs&n=13"
        />
        <Card/>
      </div>

      <Title>Одежда</Title>

    </>
  );
};

export default Header;
