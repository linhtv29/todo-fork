import classes from "./App.module.css";
import "antd/dist/antd.css";
import Title from "antd/lib/typography/Title";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { AttempLogout } from "./redux/ActionCreator";
import { useHistory } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  if (!JSON.parse(localStorage.getItem("isLoggIn"))) {
    history.push("/login");
  }

  const handleLogout = () => {
    if (window.confirm("Ban muon dang xuat?")) {
      localStorage.setItem("isLoggIn", false);
      dispatch(AttempLogout(false));
      history.push("/login");
    }
  };

  return (
    <div className={classes.appHeader}>
      <Title className={classes.header}>Todo app</Title>
      <Button className={classes.btn} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
