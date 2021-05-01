import meetuplist from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  console.log(props);
  return (
    <ul className={meetuplist.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
