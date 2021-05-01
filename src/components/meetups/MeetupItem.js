import meetupitem from './MeetupItem.module.css';
import Card from '../ui/Card'

function MeetupItem(props) {
  return (
      <Card>
    <li className={meetupitem.item}>
      <div className={meetupitem.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={meetupitem.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={meetupitem.actions}>
        <button>To Favorite</button>
      </div>
    </li>
    </Card>
  );
}

export default MeetupItem;
