import { IconCart, IconContact, IconDonation } from "../components/icons/icon";

const getLinkIcon = (textLink) => {
  if (textLink === "Contact") {
    return <IconContact />;
  } else if (textLink === "Boutique") {
    return <IconCart />;
  } else if (textLink === "Don") {
    return <IconDonation />;
  }
};

export default getLinkIcon;
