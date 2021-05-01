import card from "./Card.module.css";

function Card(props) {
  return <div className={card.card}>{props.children}</div>;
}

export default Card;
