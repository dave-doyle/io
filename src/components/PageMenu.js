import React, { useEffect } from 'react';
import '../PageMenu.css'; // Import your CSS file

const PageMenu = () => {
  useEffect(() => {
    const $menu = document.querySelector('.Menu-list');
    const $item = document.querySelectorAll('.Menu-list-item');
    const w = window.innerWidth; //window width
    const h = window.innerHeight; //window height

    const handleMouseMove = (e) => {
      const offsetX = 0.5 - e.pageX / w;
      const offsetY = 0.5 - e.pageY / h;
      const dy = e.pageY - h / 2;
      const dx = e.pageX - w / 2;
      let theta = Math.atan2(dy, dx);
      let angle = (theta * 180) / Math.PI - 90;

      if (angle < 0) {
        angle = angle + 360;
      }

      const offsetPoster = parseFloat($menu.getAttribute('data-offset'));
      const transformPoster = `translate3d(0, ${-offsetX * offsetPoster}px, 0) rotateX(${-offsetY * offsetPoster}deg) rotateY(${offsetX * (offsetPoster * 2)}deg)`;

      $menu.style.transform = transformPoster;

      $item.forEach((item) => {
        const offsetLayer = parseFloat(item.getAttribute('data-offset')) || 0;
        const transformLayer = `translate3d(${offsetX * offsetLayer}px, ${offsetY * offsetLayer}px, 20px)`;
        item.style.transform = transformLayer;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="Menu">
      <ul className="Menu-list" data-offset="10">
        <li className="Menu-list-item" data-offset="20" onClick={() => {}}>
          About
          <span className="Mask">
            <span>About</span>
          </span>
          <span className="Mask">
            <span>About</span>
          </span>
        </li>

        <li className="Menu-list-item" data-offset="20" onClick={() => {}}>
          Projects
          <span className="Mask">
            <span>Projects</span>
          </span>
          <span className="Mask">
            <span>Projects</span>
          </span>
        </li>

        <li className="Menu-list-item" data-offset="20" onClick={() => {}}>
          Contact
          <span className="Mask">
            <span>Contact</span>
          </span>
          <span className="Mask">
            <span>Contact</span>
          </span>
        </li>
        
      </ul>
    </div>
  );
};

export default PageMenu;
