import Card from "../ui/Card";
import newmeetupform from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={newmeetupform.form}>
        <div className={newmeetupform.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={newmeetupform.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={newmeetupform.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={newmeetupform.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={newmeetupform.actions}></div>
        <button>Add Meetup</button>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
