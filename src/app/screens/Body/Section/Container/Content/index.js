import React, { Fragment } from "react";

import Items from "./Items/";

import { ComponentStyle, ListContentStyle, ContentHeader } from "../../style";

function UserComponent() {
  return (
    <Fragment>
      <ComponentStyle>
        <ContentHeader>Próximos serviços</ContentHeader>
        <ListContentStyle>
          <Items />
        </ListContentStyle>
      </ComponentStyle>
    </Fragment>
  );
}
export default UserComponent;
