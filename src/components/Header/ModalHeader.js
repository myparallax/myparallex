import React from "react";
import { Modal, ModalBody, Input } from "reactstrap";
import Auth from "../Auth";

function Modalheader({modalSearch , toggleModalSearch ,state , toggleModal , loginOrReagister  }) {

  return (
    <>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <div className="modal-header">
          <Input
            id="inlineFormInputGroup"
            placeholder="جستجو ..."
            type="text"
          />
          <button
            aria-label="Close"
            className="blue-btn"
            data-dismiss="modal"
            type="button"
            onClick={toggleModalSearch}
          >
            <img
              className="icon-simple-remove"
              src={require("@/Assests/remove.svg")}
              alt="remove"
            />
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={state.modalIsOpen}
        modalClassName="modal-auth"
        centered
        toggle={toggleModal}
      >
        <ModalBody>
          <Auth login={loginOrReagister} />
        </ModalBody>
      </Modal>
    </>
  );
}

export default Modalheader;
