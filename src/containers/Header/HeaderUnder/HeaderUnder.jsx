import React from "react";
import { Center, Div } from "../../../styled/Div";
import { theme } from "../../../styled/theme";
import { ReactComponent as MenuSvgrepo } from "../../../assets/svg/menu-svgrepo-com.svg";
import { Text } from "../../../styled/Text";

const HeaderUnder = () => {
  return (
    <Center bg={theme.color.black} h="88px">
      <Div  align="center"  textalign="center"  w="200px" h="48px"  radius="5px" direction="row" bg={theme.color.black}  border="1px solid #F05A00 ">
        <MenuSvgrepo />
        <div>  <Text>Каталог товаров</Text>  </div>
      </Div>
      <Div>
        
      </Div>
    </Center>
  );
};

export default HeaderUnder;