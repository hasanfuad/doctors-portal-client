import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import "./AppointmentForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({
  modalIsOpen,
  modalIsClose,
  bookedData,
  selectedDate,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    modalIsClose();
  };

  return (
    <div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          isClose={modalIsClose}
          style={customStyles}
          onRequestClose={modalIsClose}
          contentLabel="Example Modal"
        >
          <h3 className="text-brand mt-3 text-center" style={{ fontSize: "20px" }}>
            {bookedData.subject}
          </h3>
          <br />
          <p className="text-center">
            <small>
              Appointment on{" "}
              <span style={{ borderBottom: "1px solid gray" }}>
                {selectedDate.toDateString()}
              </span>
            </small>
          </p>

          <form
            className="mt-4 text-center"
            style={{ height: "380px", width: "500px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <br />
            <input
              className="form-input"
              defaultValue="Your name"
              {...register("name")}
            />
            <br />
            <input
              className="mt-4 form-input"
              defaultValue="Phone number"
              {...register("phone")}
            />
            <br />
            <input
              className="mt-4 form-input"
              defaultValue="Email"
              {...register("exampleRequired", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <div className="">
              <select
                defaultValue="Gender"
                {...register("gender")}
                className="form-input mt-4"
                name="cars"
                id="cars"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="number" min="1" max="150"
                className="mt-4 form-input"
                defaultValue="10"
                {...register("age")}
              />
              <input
                type="number" min="1" max="150"
                className="mt-4 form-input"
                defaultValue="40"
                {...register("weight")}
              />
            </div>

            <input
              style={{ marginLeft: "18rem", height: "40px" }}
              className="mt-3 mb-3 text-start w-25 btn-brand text-white btn-brand"
              type="SUBMIT"
              defaultValue="SEND"
            />
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AppointmentForm;
