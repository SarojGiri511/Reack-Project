import Proptypes from "prop-types";

function ServiceCard({service }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      
      <h2 className="text-xl font-bold mt-4">{service.title}</h2>
      <p className="text-gray-400 mt-2">{service.description}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  service: Proptypes.object.isRequired,
};

export default ServiceCard;