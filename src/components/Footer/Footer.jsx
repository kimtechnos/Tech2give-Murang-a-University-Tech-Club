import "./footer.css";
const Footer = () => {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const formatteDate = `${month}/${date}/${year}`;
  return (
    <footer className="footer">
      <p>&copy;{formatteDate} Francis Kimani. all rights reserved</p>
    </footer>
  );
};
export default Footer;
