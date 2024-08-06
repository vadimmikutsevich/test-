import React, { createContext, useContext, useState } from "react";

interface ModalContextProps {
  showModal: (content: React.ReactNode) => void;
  hideModal: () => void;
  modalContent: React.ReactNode;
  isModalVisible: boolean;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setModalContent(null);
    setIsModalVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, hideModal, modalContent, isModalVisible }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
