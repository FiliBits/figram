import React from "react";

import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCardsWithQuery } from "./container/ListOfPhotoCardsWithQuery";

import { GlobalStyle } from "./styles/GlobalStyles";



export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  
  return (
    <React.Fragment>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId}/>
      ) : (
        <React.Fragment>
          <ListOfCategories />
          <ListOfPhotoCardsWithQuery categoryId={1} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
