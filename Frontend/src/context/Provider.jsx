import React, { createContext, useState } from 'react';

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [isOpenUploadBox, setIsOpenUploadBox] = useState(true);

  return (
    <DocumentContext.Provider value={{ isOpenUploadBox, setIsOpenUploadBox }}>
      {children}
    </DocumentContext.Provider>
  );
};