import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom'

const StreamEdit = ({ match }) => {
  const { id } = useParams();
  console.log(useLocation())
  console.log(match.params.id + " FROM STREAMEDIT")
  console.log(id + " FROM STREAMEDIT")
  console.log("HISTORY");
  console.log(useHistory())
  const history = useHistory();
  setInterval(() => {
    history.push('/')
  }, 5000);


  // const paramsString = 'q=URLUtils.searchParams&topic=api';
  const searchParams = new URLSearchParams(useLocation().search);
  // Iterating the search parameters
  for (const p of searchParams) {
    console.log(p);
  }

  return <div>StreamEdit {`${id}`}</div>;
};

export default StreamEdit;
