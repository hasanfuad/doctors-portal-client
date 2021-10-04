import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import './AppointmentForm.css';


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

const AppointmentForm = ({ modalIsOpen, modalIsClose, bookedData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <h3 class="text-brand mt-3 text-center" style={{fontSize: "20px"}}>{bookedData.subject}</h3>

          <form className="mt-4 text-center" style={{height: "380px", width: "500px"}} onSubmit={handleSubmit(onSubmit)}>
          <select className="form-input" name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
            </select>
            <br/>
            <input className="mt-4 form-input" defaultValue="Your name" {...register("name")} />
            <br />
            <input className="mt-4 form-input" defaultValue="Phone number" {...register("phone")} />
            <br />
            <input className="mt-4 form-input" defaultValue="Email" {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input className="form-input mt-4" type="date" id="start" name="start" min="2018-03" value="2018-05"/>
            <br/>
            <input style={{marginLeft: "18rem", height: "40px"}} className="mt-3 text-start w-25 btn-brand text-white" type="SUBMIT" defaultValue="SEND"/>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AppointmentForm;