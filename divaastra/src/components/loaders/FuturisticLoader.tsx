import styles from "@divaastra/components/loaders/FuturisticLoader.module.scss";
import { useEffect, useRef } from "react";

const FuturisticLoader = () => {
  const sparkleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      if (sparkleRef.current) {
        sparkleRef.current.appendChild(sparkle);
      }
      setTimeout(() => sparkle.remove(), 1000);
    };

    const sparkleInterval = setInterval(createSparkle, 800);
    return () => clearInterval(sparkleInterval);
  }, []);

  return (
    <div className={styles["divaastra__loader-wrapper"]}>
      <div className={styles.loader}>
        <div className={styles.orb} />
        <div className={`${styles.ring} ${styles.ring1}`} />
        <div className={`${styles.ring} ${styles.ring2}`} />
        <div className={styles.sparkleContainer} ref={sparkleRef} />
      </div>
    </div>
  );
};

export default FuturisticLoader;
