import React from "react";

import { Layout } from "../components/Layout";

import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCardsWithQuery } from "../container/ListOfPhotoCardsWithQuery";

const HomePage = ({ id }) => {
  return (
    <Layout
      title="Tu app de fotos"
      subtitle="Con figram puedes encontrar muchas fotos"
    >
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id == props.id
});
