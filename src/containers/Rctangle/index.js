import React from "react";
import { ReactComponent as Frame } from "../../assets/svg/Frame.svg";
import { ReactComponent as Heart } from "../../assets/svg/heart.svg";
import { ReactComponent as Shopping } from "../../assets/svg/shopping-cart.svg";
import { ReactComponent as Bar } from "../../assets/svg/bar.svg";
import { DivRctangle, FlexRctangle } from "../../styled/Div";
import { Text } from "../../styled/Text";
import { theme } from "../../styled/theme";
import { Link } from "react-router-dom";

const Rctangle = ({ item }) => {
  return (
    <Link to="/">
      <DivRctangle >
        <divPosition> {item}</divPosition>
        <FlexRctangle className="count">
          <Text size={theme.fontSize.shape}>0</Text>
        </FlexRctangle>
      </DivRctangle>
    </Link>
  );
};

export default Rctangle;

export const RctangleData = [<Frame />, <Heart />, <Shopping />, <Bar />];
