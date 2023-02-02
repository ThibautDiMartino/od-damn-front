import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext, ThemeMode } from "../../../common/ThemeContext";
import "./ThemeSwitch.scss";

const ThemeSwitch = ({
  editable = true,
  style,
}: {
  editable?: boolean;
  style?: object;
}) => {
  const { mode, setMode } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(mode === ThemeMode.LIGHT);

  const toggleSwitch = () => {
    setMode(mode === "light" ? ThemeMode.DARK : ThemeMode.LIGHT);
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="theme-switch">
      <FontAwesomeIcon
        icon={faMoon}
        style={{ color: "grey", marginRight: 10, fontSize: 20 }}
      />
      <Switch
        defaultChecked={isEnabled}
        color="primary"
        onChange={() => {
          if (editable) toggleSwitch();
        }}
        value={isEnabled || false}
      />
      <FontAwesomeIcon
        icon={faSun}
        style={{ color: "orange", marginLeft: 10, fontSize: 20 }}
      />
    </div>
  );
};

export default ThemeSwitch;
