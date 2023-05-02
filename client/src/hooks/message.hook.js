import { useCallback } from 'react';

export const useMessage = () => {
  return useCallback((text) => {
    //Materialize встроенная функция ошибок
    if (window.M && text) {
      window.M.toast({ html: text });
    }
  }, []);
};
