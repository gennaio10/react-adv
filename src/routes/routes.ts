import { lazy, LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1"*/ "../01-lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2"*/ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3"*/ "../01-lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    //Component: LazyPage1,
    Component: Lazy1,
    name: "lazy-1 Home",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    //Component: LazyPage2,
    Component: Lazy2,
    name: "lazy-2 About",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    //Component: LazyPage3,
    Component: Lazy3,
    name: "lazy-3 User",
  },
];
