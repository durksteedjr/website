"use client";

import { API_URL } from "../lib";
import { useMutation, useQuery } from "@tanstack/react-query";

export type UseViewsProps = {
  slug: string;
  model: "travel";
};

export const useViews = ({ model = "travel", slug }: UseViewsProps) => {
  const URL = `${API_URL}/${model}/${slug}/views`;

  return {
    mutation: useMutation({
      mutationFn: () => fetch(URL, { method: "POST" }),
      mutationKey: [slug, model, "views"],
    }),
    query: useQuery({
      queryFn: () => fetch(URL).then((res) => res.json()),
      queryKey: [slug, model, "views"],
    }),
  };
};
