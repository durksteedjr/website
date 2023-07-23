"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

import { API_URL } from "../lib";

export interface UseViewsProps {
  slug: string;
  type: "post";
}

export const useViews = ({ slug, type }: UseViewsProps) => {
  const FETCH_API_URL = `${API_URL}/${type}s/${slug}/views`;

  return {
    mutation: useMutation({
      mutationFn: () => fetch(FETCH_API_URL, { method: "POST" }),
      mutationKey: [slug, type, "views"]
    }),
    query: useQuery({
      queryFn: () =>
        fetch(FETCH_API_URL).then((res) => res.json()),
      queryKey: [slug, type, "views"]
    })
  };
};
