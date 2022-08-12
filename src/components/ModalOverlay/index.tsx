import styles from './styles.module.scss';

interface ModalOverlayProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalOverlay = ({
  title,
  isOpen,
  onClose,
  children,
}: ModalOverlayProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        aria-label="modal-overlay"
        className={styles.overlay}
        onClick={onClose}
        aria-hidden="true"
      />
      <dialog className={styles.centeredContainer}>
        <div className={styles.modal}>
          {/* <div className={styles.modalHeader}>
            {title && <h5 className={styles.heading}>{title}</h5>}
            <button
              type="button"
              className={styles.closeModalButton}
              onClick={onClose}
            >
              <RiCloseLine />
            </button>
          </div> */}
          <div className={styles.divider} />
          <div className={styles.modalContent}>{children}</div>
        </div>
      </dialog>
    </>
  );
};
