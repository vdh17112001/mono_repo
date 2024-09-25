import { ComponentProps } from 'react';

export const MyText = (props: ComponentProps<'button'>) => {
  return <button {...props} />;
};
