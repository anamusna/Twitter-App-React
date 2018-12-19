import styled from "styled-components";
import styledMap from "styled-map";

const buttonColor = styledMap({
  follow: "white",
  default: "#1DA1F2"
});

export default styled.button`
  border-radius: 100px;
  border: 1px solid
    ${styledMap({
    default: "#1DA1F2"
  })};
  background: ${buttonColor};

  line-height: 14px;
  font-size: 14px;
  text-align: center;

  color: ${styledMap({
    followText: "#1DA1F2",
    default: "white"
  })};

  padding: ${styledMap({
    followPadding: "9px 27px",
    large: "6px 30px 8px",
    default: "8px"
  })};

  margin-right: ${styledMap({
    larrgeMargin: "5px",
    default: "0"
  })};
`;
