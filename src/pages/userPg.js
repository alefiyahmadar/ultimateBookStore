import { useContext, useState } from "react";
import { AppContext } from "../contextProvider";

export const UserPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showProfile, setProfile] = useState(true);
  const [openNewAd, setOpenNewAd] = useState(false);
  const [getNewObj, setNewObj] = useState({
    firstname: "",
    lastname: "",
    house: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    number: "",
  });

  const { AdressArr, setAdressArr, getId, setId } = useContext(AppContext);

  const LogOutHandler = () => {};
  const AddAdressHandler = () => {
    setAdressArr([...AdressArr, getNewObj]);

    setNewObj({
      id: setId(getId + 1),
      firstname: "",
      lastname: "",
      house: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      number: "",
    });
    setOpenNewAd(false);
  };
  console.log(AdressArr);
  return (
    <div className="userContainer">
      <div className="userChild">
        <button className="toggleUser pro" onClick={() => setProfile(true)}>
          Profile
        </button>
        <button className="toggleUser" onClick={() => setProfile(false)}>
          Adress
        </button>
        <div
          style={{ display: showProfile ? "block" : "none" }}
          className="ProfileUser"
        >
          <p>
            <span style={{ fontWeight: "bold", paddingRight: "0.5rem" }}>
              Name
            </span>{" "}
            {user.firstName} {user.lastName}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold", paddingRight: "0.5rem" }}>
              Email
            </span>{" "}
            {user.email}
          </p>
          <button onClick={LogOutHandler}>Log Out</button>
        </div>
        <div
          style={{ display: showProfile ? "none" : "block" }}
          className="AdressDiv"
        >
          {AdressArr.map((e) => (
            <div
              style={{
                display: openNewAd ? "none" : "block",
                textAlign: "left",
              }}
              id={e.id}
            >
              <h3>
                {e.firstname} {e.lastname}
              </h3>

              <p>
                {e.house},{e.city} , {e.state}
              </p>

              <p>
                {e.country} {e.pincode}
              </p>
              <p>Ph.Number: {e.number}</p>
              <button
                onClick={() =>
                  setAdressArr(AdressArr.filter((item) => item.id !== e.id))
                }
                className="deleteBtn"
              >
                Delete
              </button>
            </div>
          ))}
          <div
            style={{ display: openNewAd ? "block" : "none" }}
            className="newAdress"
          >
            <p>Add New Adress</p>
            <input
              value={getNewObj.firstname}
              placeholder="firstname"
              onChange={(e) =>
                setNewObj({ ...getNewObj, firstname: e.target.value })
              }
            ></input>
            <input
              value={getNewObj.lastname}
              placeholder="lastname"
              onChange={(e) =>
                setNewObj({ ...getNewObj, lastname: e.target.value })
              }
            ></input>
            <input
              value={getNewObj.house}
              placeholder="house-street"
              onChange={(e) =>
                setNewObj({ ...getNewObj, house: e.target.value })
              }
            ></input>
            <input
              value={getNewObj.city}
              placeholder="city"
              onChange={(e) =>
                setNewObj({ ...getNewObj, city: e.target.value })
              }
            ></input>
            <input
              value={getNewObj.state}
              placeholder="state"
              onChange={(e) =>
                setNewObj({ ...getNewObj, state: e.target.value })
              }
            ></input>
            <input
              value={getNewObj.country}
              placeholder="country"
              onChange={(e) =>
                setNewObj({ ...getNewObj, country: e.target.value })
              }
            ></input>
            <input
              value={getNewObj.pincode}
              type="number"
              placeholder="pincode"
              onChange={(e) =>
                setNewObj({ ...getNewObj, pincode: e.target.value })
              }
            ></input>
            <input
              value={getNewObj.number}
              type="number"
              placeholder="ph.number"
              onChange={(e) =>
                setNewObj({ ...getNewObj, number: e.target.value })
              }
            ></input>
            <button
              style={{
                padding: "0.3rem",
                backgroundColor: "#5fa052",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
              onClick={AddAdressHandler}
            >
              Add
            </button>{" "}
            <button
              style={{
                padding: "0.3rem",
                backgroundColor: "white",
                color: "#5fa052",
                border: "1px solid #5fa052",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
              onClick={() => setOpenNewAd(false)}
            >
              Close
            </button>
          </div>

          <button
            className="AddAdBtn"
            style={{ display: openNewAd ? "none" : "block" }}
            onClick={() => setOpenNewAd(true)}
          >
            +Add New Adress
          </button>
        </div>
      </div>
    </div>
  );
};
