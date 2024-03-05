import React from "react";
import { Center, Div } from "../../../styled/Div";
import { ReactComponent as Logo } from "../../../assets/svg/Лого.svg";
import { theme } from "../../../styled/theme";
import { Text } from "../../../styled/Text";
import { Link } from "react-router-dom";
import Rctangle, { RctangleData } from "../../Rctangle";
import "./style.css";

const HeaderUp = () => {
  return (
    <Center bg={theme.color.grey500} h="96px">
      <div className="header">
        <Div align="center" w="100%" justify="space-between">
          <Logo />
          <div className="time-10">
            <Text>Время работы: 10:00-20:00</Text>
          </div>
          <div className="phone">
            <Div direction="column" aligt="center">
              <Text>+374 93-66-81-64</Text>
              <Link to="#" color="red">
                Заказать звонок
              </Link>
            </Div>
          </div>
          <Div align="center" gap="10px">
            <Div gap="3px">
              {RctangleData.map((item, idx) => (
                <Rctangle key={idx} item={item} />
              ))}
            </Div>
            <div className="Products-2000">
              <Text>
                Товаров на сумму
                <br />2 000
              </Text>
            </div>
          </Div>
        </Div>
      </div>
    </Center>
  );
};

export default HeaderUp;

// const [chenge, setCheng] = useState(false);

// <button onClick={() => setCheng(!chenge)}>
// <Menu />
// </button>
// <div className="dropdown">
// {chenge ? (
// <div className="dropdownlink" >
//   <a href="#">Link 1</a>
//   <a href="#">Link 2</a>
//   <a href="#">Link 3</a>
// </div>
// ) : (
// ""
// )}
