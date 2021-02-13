import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FontAwesomeLib({ icon, size, classNames }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={classNames}
      size={size}
    />
  );
}
