import React from "react";
import {Button} from 'reactstrap'; 

function SearchButton({toggleModalSearch}) {
  return (
    <>
      <div className="search-bar nav-item">
        <Button
          color="link"
          data-target="#searchModal"
          data-toggle="modal"
          id="search-button"
          onClick={toggleModalSearch}
        >
          <img src={require("@/Assests/search-icon.svg")} alt="search-icon" />
          <span className="d-lg-none d-md-block nav-link" to="#">
            جستجو
          </span>
        </Button>
      </div>
    </>
  );
}

export default SearchButton;
