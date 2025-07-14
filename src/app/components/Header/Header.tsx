'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Aplica la clase global al body
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.navbarDark : styles.navbarLight}`}>
      <div className={styles.leftSide}>
        {/* <Image src="/image/LOGOFX.png" alt="Logo FX" width={50} height={50} className={styles.MiLogo} /> */}
        <div className={styles.logo}>MI PORTAFOLIO</div>
      </div>

      {/* Botón menú mobile */}
      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      {/* Enlaces */}
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <a href="#inicio" className={styles.botonnav} onClick={() => setIsOpen(false)}>Inicio</a>
        <div className={styles.dropdown}>
          <a href="#proyectos" className={styles.botonnav}>
          Proyectos
        </a>
          <div className={styles.dropdownContent}>
            <a href="#mysql" onClick={() => setIsOpen(false)}>MySQL</a>
            <a href="#taller" onClick={() => setIsOpen(false)}>Taller</a>
            <a href="#otros" onClick={() => setIsOpen(false)}>Otros</a>
          </div>
        </div>
        <a href="#contacto" className={styles.botonnav} onClick={() => setIsOpen(false)}>Contacto</a>
        <a href="https://github.com/" target="_blank" className={styles.botonnav} rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>

      {/* Botón modo oscuro */}
      <div className={styles.rightSide}>
        <button className={styles.toggleButton} onClick={() => setDarkMode(!darkMode)} aria-label="Cambiar tema">
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </button>
      </div>
    </nav>
  );
}