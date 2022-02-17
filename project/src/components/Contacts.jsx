import styles from "../styles/contacts.module.sass";
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  ObjectManager,
  Clusterer,
  SearchControl,
  TrafficControl,
} from "react-yandex-maps";
import { useEffect, useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [points, setPoints] = useState([]);
  const [myMap, setMyMap] = useState("");
  const [myPoint, setMyPoint] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  console.log(myMap);
  //   console.log(myPoint);

  useEffect(() => {
    axios.get(`http://localhost:1337/points`).then((res) => {
      const dataServer = res.data;
      setPoints(dataServer);
    });
  }, []);

  const clickOnMap = async (e) => {
    const coords = e.get("coords");
    setMyPoint({ point: [coords[0].toPrecision(6), coords[1].toPrecision(6)] });
    setIsClicked(true);

    myMap.geocode(coords).then((res) => {
      const firstGeoObject = res.geoObjects.get(0).getAddressLine();
      setMyPoint({
        point: [coords[0].toPrecision(6), coords[1].toPrecision(6)],
        title: firstGeoObject,
      });
    });

    // console.log(coords[0].toPrecision(6), coords[1].toPrecision(6));
    // e.balloon.open()
  };

  const addAddress = () => {
    console.log("ok");
  };

  return (
    <div className="_container">
      <div className={styles.content}>
        <div className={styles.contacts_info}>
          <h2 className={styles.contacts_title}>Contacts us</h2>
          <div>
            <span>Address:</span>
            <p>
              213 Baker Street Oriel City Kounty <br /> 7000 KNW, Kountry Name
            </p>
          </div>
          <div>
            <span>Phone:</span>
            <p>+23 994 233 402</p>
          </div>
          <div>
            <span>Email:</span>
            <p>info@konstruct.com</p>
          </div>
        </div>
        <YMaps
          query={{
            ns: "use-load-option",
            load: "Map,Placemark,geocode,templateLayoutFactory,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon,geoObject.addon.hint",
            apikey: "fdaa79e5-b0c7-4282-8a03-ae5071de23e6",
          }}
        >
          <div className={styles.contacts_map}>
            <Map
              defaultState={{
                center: [55.751574, 37.573856],
                zoom: 9,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              onLoad={(ymaps) => setMyMap(ymaps)}
              //   instanceRef={inst => inst.events.add('click', clickOnMap)}
              onClick={clickOnMap}
              //   instanceRef={(ref) => setMyMap(ref)}
              //   modules={["control.ZoomControl", "control.FullscreenControl"]}
              width={"100%"}
              height={"400px"}
            >
              <Clusterer
                options={{
                  preset: "islands#invertedVioletClusterIcons",
                  groupByCoordinates: false,
                }}
              >
                {isClicked && (
                  <Placemark
                    geometry={myPoint.point}
                    maxWidth="200px"
                    properties={{
                      hintContent: [
                        `<div style=" position:relative; display:flex"><p style="color:red; margin: 5px;display: block; ">${myPoint.title}</p></div>`,
                      ].join(""),
                      balloonContentHeader: "Выбранный адрес",
                      balloonContentBody: `<p style="width:200px; margin-bottom: 5px">${myPoint.title}</p + <br>`,
                      balloonContentFooter: `<button style="padding: 5px; cursor:pointer;" onClick=${() =>
                        addAddress()}>Добавить адрес</button>`,
                    }}
                  />
                )}

                {points.map((point, index) => (
                  <Placemark
                    key={index}
                    geometry={[point.coords1, point.coords2]}
                    properties={{
                      hintContent: `<p style="color:red; margin: 5px">${point.title}</p>`,
                    }}
                  />
                ))}
              </Clusterer>
              <TrafficControl options={{ float: "right" }} />
              <SearchControl options={{ float: "right" }} />
              <GeolocationControl options={{ float: "left" }} />
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  );
};

export default Contacts;

// export async function getServerSideProps(context) {
//   //   axios.get(`http://localhost:1337/points`).then((res) => {
//   //     const data = res.data;
//   //   });
//   const responsePoints = await fetch(`http://localhost:1337/points`);
//   const points = await responsePoints.json();
//   console.log(points);
//   return {
//     props: { points }, // will be passed to the page component as props
//   };
// }
