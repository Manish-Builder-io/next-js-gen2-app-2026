"use client";
import Counter from "./components/Counter/Counter";
import Blog from "./components/Blog/Blog";

export const CUSTOM_COMPONENTS = [
  {
    component: Counter,
    name: "Counter",
  },
  {
    component: Blog,
    name: "Blog",
    inputs: [
      {
        name: "author",
        type: "reference",
        model: "author",
      },
    ],
  },
];
