"use client";

export interface UseScrollProps extends ScrollToOptions {}

export const useScroll = ({
  ...props
}: UseScrollProps): [() => void] => {
  const scroll = () => window.scrollTo({ ...props });

  return [scroll];
};
