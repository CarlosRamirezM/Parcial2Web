import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import DetailSpace from "./detailSpace";
import Space from "./space";

function Spaces() {
  const url =
    "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

  const [spaces, setSpaces] = useState([]);
  const [selectedSpace, setSelectedSpace] = useState(undefined);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("spaces") === null) {
        setSpaces("Loading...");
      } else {
        setSpaces(localStorage.getItem("spaces"));
      }
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setSpaces(res);
          localStorage.setItem("spaces", JSON.stringify(res));
        });
    }
  });

  return (
    <div>
      <div className="row">
        <h5><FormattedMessage id="MySpaces"/></h5>
        {spaces.map((s) => (
          <div className="col-3" onClick={() => setSelectedSpace(s)}> 
              <Space space={s}/>
          </div>
        ))}
      </div>
      <div>
            {selectedSpace? <DetailSpace detail={selectedSpace}/>: ""}
      </div>
    </div>
  );
}

export default Spaces;
