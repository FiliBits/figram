import React from "react";

import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCardsWithQuery } from "../container/ListOfPhotoCardsWithQuery";

export const Home = ({ id }) => {
  return (
    <React.Fragment>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </React.Fragment>
  );
}