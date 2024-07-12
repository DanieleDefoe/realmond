import { useCallback, useState } from 'react';

export const useInput = <T>(defaultValue: T) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  }, []);

  return {
    value,
    onChange,
  };
};
