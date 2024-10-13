"use client";

export const useScroll = () => {
  const scroll = (props?: ScrollToOptions) => window.scrollTo(props);

  return { scroll };
};
