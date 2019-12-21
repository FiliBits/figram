import React from "react";

import { Loader } from "../components/Loader";
import { PhotoCard } from "../components/PhotoCard";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />
      const { photos = [] } = data;
      return (
        <ul>
          {photos.map(photo => (
            <PhotoCard key={photo.id} {...photo} />
          ))}
        </ul>
      );
    }}
  </Query>
);