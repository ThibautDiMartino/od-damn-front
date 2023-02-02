import { User, UserCredential } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorageKeys } from "../../models/localStorage";
import { logger } from "../../utils/logger";
import { RouteName } from "../../utils/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faUniversity,
  faTimes,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import female from "../../static/m1.png";
import male from "../../static/m2.png";
import morpion from "../../static/morpion.png";
import stick from "../../static/stick.png";
import { colorType, sizeType, widthType } from "../../utils/types";
import Button from "../../components/ui/button/Button";
import Avatar from "../../components/ui/avatar/Avatar";
import Input from "../../components/ui/input/Input";
import { useForm } from "react-hook-form";
import { useAuth } from "../../common/AuthContext";
import AccountLayout from "../../layouts/AccountLayout";

enum GameStatus {
  WIN = "win",
  DRAW = "draw",
  LOSE = "lose",
}

enum GameType {
  STICK = "stick",
  MORPION = "morpion",
}

const gameTypeToIconMap = {
  [GameType.MORPION]: faTimes,
  [GameType.STICK]: faMinus,
};

const gameStatusToHEXMap = {
  [GameStatus.WIN]: "#9CCC65",
  [GameStatus.DRAW]: "#42A500",
  [GameStatus.LOSE]: "#FF7043",
};

const data = [
  { Status: GameStatus.DRAW, area: 10 },
  { Status: GameStatus.LOSE, area: 24 },
  { Status: GameStatus.WIN, area: 76 },
];

const history = [
  { type: GameType.MORPION, status: GameStatus.DRAW },
  { type: GameType.MORPION, status: GameStatus.LOSE },
  { type: GameType.MORPION, status: GameStatus.WIN },
  { type: GameType.STICK, status: GameStatus.LOSE },
  { type: GameType.STICK, status: GameStatus.WIN },
];

const tabs = [
  { name: "History", active: false, id: 0 },
  { name: "Dashboard", active: true, id: 1 },
  { name: "Statistics", active: false, id: 2 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { control } = useForm();
  const { getUser } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tab, setTab] = useState(tabs);
  const images = [morpion, stick];
  const links = ["/morpion", "/stick"];
  // const colors = [];
  // scheme.map((color) => (
  //   colors.push(color)
  // ));
  // const col = colors[0];
  // const chartData = useState({ data });
  const [currentSlide, setCurrentSlide] = useState(0);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(images.length - 1);
    }
  }

  function next() {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  // function handleKeyDown(event) {
  //   if (event.keyCode === 39) {
  //     next();
  //   } else if (event.keyCode === 37) {
  //     previous();
  //   }
  // }

  const selectTab = (name: string) => {
    const prevTab = tab.filter((tab) => tab.active);
    const newTab = tab.filter((tab) => tab.name === name);
    const cleanTab = tab.filter((tab) => !tab.active && tab.name !== name);
    setTab(
      [
        ...cleanTab,
        {
          ...prevTab[0],
          active: false,
        },
        {
          ...newTab[0],
          active: true,
        },
      ].sort((a, b) => (a.id > b.id ? 1 : -1))
    );
  };

  // useEffect(() => {
  //   logger.log(RouteName.ACCOUNT_DASHBOARD);
  //   const user = getUser();

  //   if (!!!user) navigate(RouteName.CONNECT);
  //   else {
  //     setUser(user);
  //     setIsLoading(false);
  //   }
  // }, []);

  return (
    <AccountLayout>
      <div className="account-dashboard">
        <div className="tab-nav">
          {tab.map((tab, idx) => {
            return (
              <div
                key={idx}
                className={`tab is-clickable is-${
                  tab.active ? "active" : "inactive"
                }`}
                onClick={() => selectTab(tab.name)}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div className="tab-content">
          {tab.map((tab) => {
            return (
              <>
                {tab.name === tabs[0].name && (
                  <section
                    id={tab.name}
                    className={`is-${tab.active ? "active" : "inactive"}`}
                  >
                    <div className="coins">
                      <FontAwesomeIcon
                        icon={faCoins}
                        style={{
                          color: "orange",
                          marginRight: 10,
                          fontSize: 30,
                        }}
                      />
                      <span>9000</span>
                    </div>
                    <div className="ranking">
                      <FontAwesomeIcon
                        icon={faUniversity}
                        style={{ color: "grey", marginRight: 10, fontSize: 30 }}
                      />
                      <span>9000</span>
                    </div>
                    <div className="game-history">
                      <span className="history">Game history</span>
                      {history.map((game) => {
                        return (
                          <FontAwesomeIcon
                            icon={gameTypeToIconMap[game.type]}
                            style={{
                              color: gameStatusToHEXMap[game.status],
                              marginRight: 5,
                              transform: `rotate(${
                                GameType.STICK ? "90deg" : "0deg"
                              })`,
                            }}
                          />
                        );
                      })}
                    </div>
                  </section>
                )}
                {tab.name === tabs[1].name && (
                  <section
                    id={tab.name}
                    className={`is-${tab.active ? "active" : "inactive"}`}
                  >
                    <div className="title">Welcome, {user?.displayName}</div>

                    {/* <Input name="text" placeholder="Nickname" control={control} /> */}
                    <div className="game-selector">
                      {/*   <div
                      role="button"
                      tabIndex={0}
                      className="left-arrow"
                      onClick={previous}
                      // onKeyDown={handleKeyDown}
                    >
                      {" "}
                    </div>
                    <div className="games-wrapper">
                      <img
                        src={images[currentSlide]}
                        alt="morpion game"
                        className="game-img"
                      />
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      className="right-arrow"
                      onClick={next}
                      // onKeyDown={handleKeyDown}
                    >
                      {" "}
                    </div> */}
                      {/* <div className="play-btn"> */}
                      {/* <Link to={links[currentSlide]}> */}
                      {/* <Button
                        label="PLAY"
                        color={colorType.PRIMARY}
                        size={sizeType.MEDIUM}
                        width={widthType.FULL}
                        squared
                        onClick={() => {}}
                      /> */}
                      {/* </Link> */}
                      {/* </div> */}
                    </div>
                  </section>
                )}
                {tab.name === tabs[2].name && (
                  <section
                    id={tab.name}
                    className={`is-${tab.active ? "active" : "inactive"}`}
                  >
                    {/* <Paper>
                    <Chart data={data} width="400" height="400">
                      <PieSeries
                        valueField="area"
                        argumentField="Status"
                        color="color"
                      />
                      <Legend />
                      <Title text="Total games stats" />
                      <Animation />
                    </Chart>
                  </Paper> */}
                  </section>
                )}
              </>
            );
          })}
        </div>
        {/* <div className="friends">
          <div className="connected">
            <img src={female} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
            <img src={male} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
            <img src={male} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
          </div>
          <div className="disconnected">
            <img src={female} alt="friend" className="friend" />
            <img src={male} alt="friend" className="friend" />
            <img src={male} alt="friend" className="friend" />
            <img src={male} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
            <img src={male} alt="friend" className="friend" />
            <img src={male} alt="friend" className="friend" />
            <img src={male} alt="friend" className="friend" />
            <img src={female} alt="friend" className="friend" />
          </div>
        </div> */}
      </div>
    </AccountLayout>
  );
};

export default Dashboard;
