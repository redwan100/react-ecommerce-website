const Footer = () => {
  return (
    <div className="bg-primary py-3">
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright &copy; Ecommerce Shop {new Date().getFullYear()}. All rights
          reserved by Redwan{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
