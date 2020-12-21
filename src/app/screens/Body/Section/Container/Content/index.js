import React, { Fragment } from "react";

import Items from "./Items/"

import {
  ComponentStyle,
  ListContentStyle,
} from "../../style";

function UserComponent() {

  return (
    <Fragment>
      <ComponentStyle>
        <ListContentStyle>
          <Items/>
        </ListContentStyle>
      </ComponentStyle>
    </Fragment>
  );
}
export default UserComponent;
