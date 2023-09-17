import { ListingDataType } from "../types";
import Item from "../item/Item";

export default function Listing({ data }: ListingDataType) {
  return (
    <div className="item-list">
      {data.map((el, id) => (
        <Item props={el} key={id} />
      ))}
    </div>
  );
}
