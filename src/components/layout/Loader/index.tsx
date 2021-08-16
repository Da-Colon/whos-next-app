import Container, { EContainer } from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <Container variant={EContainer.flex} addClasses="p-8 gap-4 fa-blink">
      <FontAwesomeIcon icon={faCircle} size="1x" />
      <FontAwesomeIcon icon={faCircle} size="1x" />
      <FontAwesomeIcon icon={faCircle} size="1x" />
    </Container>
  );
};

export default Loader;
