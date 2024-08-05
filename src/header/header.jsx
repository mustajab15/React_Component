import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const socialMedia = [
    {
      icon: "faCoffee",
      href: "https://www.starbucks.co.id/",
    },
  ];

  return (
    <>
      <div className="social-buttons">
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      <div className="social-buttons.right"></div>
    </>
  );
}

export default Header;
