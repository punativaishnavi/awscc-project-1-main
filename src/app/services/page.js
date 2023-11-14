import Image from 'next/image';
import styles from 'src/app/services/page.module.css';

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Logo" width={75} height={60} />
          <h1 className={styles.logoTitle}>Extracta</h1>
        </div>
        <nav className={styles.nav}>
          <a href="/" className={styles.navItem}>Home</a>
          <a href="/about" className={styles.navItem}>About</a>
        </nav>
      </header>
    <div className={styles.verticalContainer}>
        <div className={styles.rectangle}>
          <img src="/Rekognition.png" alt="Logo" className={styles.logo} />
          <h2 className={styles.heading}>Rekognition</h2>
          <p className={styles.text}>Extract items in images to turn visual data into tangible insights.</p>

          <button className={styles.button}>
            Use
          </button>
        </div>

        <div className={styles.rectangle}>
            <img src="/Transcribe.png" alt="Logo" className={styles.logo} />
            <h2 className={styles.heading}>Transcribe</h2>
            <p className={styles.text}>Extract text transcripts from meetings, and redact personal identifiable information.</p>
            <button className={styles.button}>
                Use
            </button>
        </div>

        <div className={styles.rectangle}>
            <img src="/Comprehend.png" alt="Logo" className={styles.logo} />
            <h2 className={styles.heading}>Comprehend</h2>
            <p className={styles.text}>Extract data, topics, and classifications with confidence scores from your documents.</p>
            <button className={styles.button}>
                Use
            </button>
        </div>
      </div>
    </div>
  );
}

