import { FC, ReactNode } from 'react';

type LightLayout = {
  children: ReactNode;
};

export const LightLayout: FC<LightLayout> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        color: '#000',
        padding: 10,
        borderRadius: 5,
      }}
    >
      <h3>LightLayout</h3>
      <div>{children}</div>
    </div>
  );
};
