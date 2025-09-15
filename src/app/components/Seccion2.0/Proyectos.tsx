import MagicBento from '@/Components/MagicBento/MagicBento';
import styles from './proyecto.module.css';
export default function Proyectos() {
  return (
    <section id='proyectos' className={styles.proyectosContainer}>
      <h2 className={styles.titulo}>Mis Proyectos</h2>
      <MagicBento 
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
    </section>
  );
}
