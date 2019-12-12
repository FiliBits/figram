import React, { useEffect, useState } from "react";

import { List, Item } from "./styles";

import { Loader } from "../Loader";
import { Category } from "../Category";



function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function() {
    setLoading(true);
    window
      .fetch("https://figram-server.now.sh/categories")
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      });
  }, []);
  return { categories, loading };
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(
    function() {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = fixed => (
    <List fixed={fixed}>
      {loading ? (
        <Loader />
      ) : (
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  );
};
