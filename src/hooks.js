import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowWidth;
}

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  })
}

export const useInputForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleValueChange
  }
}
