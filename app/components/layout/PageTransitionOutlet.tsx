import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigation } from "react-router";
import { PtStarSpinBadge } from "~/components/brand/PtStarSpinBadge";

const MIN_OVERLAY_MS = 720;

export function PageTransitionOutlet() {
  const location = useLocation();
  const navigation = useNavigation();
  const reduceMotion = useReducedMotion();
  const [overlay, setOverlay] = useState(false);
  const skipInitial = useRef(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (navigation.state === "loading" && !reduceMotion) {
      setOverlay(true);
    }
  }, [navigation.state, reduceMotion]);

  useEffect(() => {
    if (skipInitial.current) {
      skipInitial.current = false;
      return;
    }
    if (reduceMotion) return;

    setOverlay(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setOverlay(false);
      hideTimer.current = null;
    }, MIN_OVERLAY_MS);

    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };
  }, [location.key, reduceMotion]);

  const showOverlay =
    !reduceMotion && (overlay || navigation.state === "loading");

  return (
    <>
      <AnimatePresence>
        {showOverlay ? (
          <motion.div
            key="page-transition"
            className="page-transition-overlay"
            role="status"
            aria-live="polite"
            aria-label="Mudando de página"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <PtStarSpinBadge />
            <span className="sr-only">Mudando de página</span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        key={location.pathname}
        className="page-transition-content"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.32,
          delay: reduceMotion ? 0 : 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Outlet />
      </motion.div>
    </>
  );
}
