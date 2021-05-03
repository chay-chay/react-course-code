import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    "https://react-getting-started-24005-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => {
      response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}
export default AllMeetupsPage;
