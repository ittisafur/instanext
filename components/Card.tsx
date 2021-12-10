const Card = ({ children, ...rest }) => {
  return (
    <div {...rest} className="p-4 bg-white border border-gray-primary">
      {children}
    </div>
  );
};

export default Card;
