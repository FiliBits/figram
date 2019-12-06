import React from "react";

import { Logo } from "./components/Logo";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";

import { GlobalStyle } from "./styles/GlobalStyles";


export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </React.Fragment>
);
