import React from "react";

import { Spinner, Bounce} from "./styles";

export const Loader = () => {
  return (
    <Spinner>
      <Bounce></Bounce>
      <Bounce second></Bounce>
    </Spinner>
  );
}