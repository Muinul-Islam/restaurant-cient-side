const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-3/4 lg:w-3/12 mx-auto mb-10">
      <p className="text-yellow-600 text-xl mb-3">---{subHeading}---</p>
      <h3 className="text-3xl uppercase border-y-2 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
