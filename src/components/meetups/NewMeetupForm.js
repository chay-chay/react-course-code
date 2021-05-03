import { useRef } from 'react';
import Card from "../ui/Card";
import newmeetupform from "./NewMeetupForm.module.css";


function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value
  }

  return (
    <Card>
      <form className={newmeetupform.form} onSubmit={submitHandler}>
        <div className={newmeetupform.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={newmeetupform.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={newmeetupform.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={newmeetupform.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={newmeetupform.actions}></div>
        <button>Add Meetup</button>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
