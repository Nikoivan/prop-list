import { ItemProps } from "../types";
import getCS from "../../functions/getCS";
import getBL from "../../functions/getBL";
import convertTitle from "../../functions/converTitle";

export default function Item({ props }: ItemProps) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={props.url}>
          <img src={props.MainImage.url_570xN} alt={props.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {props.title.length <= 50 ? props.title : convertTitle(props.title)}
        </p>
        <p className="item-price">{getCS(props.currency_code) + props.price}</p>
        <p className={`item-quantity ${getBL(props.quantity)}`}>
          {props.quantity} left
        </p>
      </div>
    </div>
  );
}
