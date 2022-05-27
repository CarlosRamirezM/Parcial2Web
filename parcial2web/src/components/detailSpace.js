import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import DetailDevices from "./detailDevices";
import DetailRoom from "./detailRoom";

function DetailSpace(props) {
  const url =
    "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
  const [list, setList] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(undefined);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("rooms") === null) {
        setList("Loading...");
      } else {
        setList(localStorage.getItem("rooms"));
      }
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setList(res);
          localStorage.setItem("rooms", JSON.stringify(res));        
        });
    }
  });

  return (
    <div className="row">
      <div className={selectedRoom? "col-8" : "col-12"}>
        <div className="row">
        {list.map(r => r.homeId === props.detail.id? (<div className="col-3" onClick={()=> setSelectedRoom(r)}> <DetailRoom room={r}/> </div>): "")}          
        </div>
      </div>
      {selectedRoom? 
      (<div className="col-4">
        <table className="table">
          <thead> 
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Device </th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {selectedRoom.devices.map((d,i) => <DetailDevices device={d} count={i}/>)}
          </tbody>
        </table>
      </div>) : 
      ""}
    </div>
  );
}

export default DetailSpace;
