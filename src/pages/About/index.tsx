const About = () => {
  const description = "Nakoruru is a React Admin project that utilizes Antd and React 18 to provide a user-friendly and efficient interface for managing data. The project also makes use of Recoil for state management, allowing for a more streamlined and organized codebase. With Nakoruru, users can easily view, create, update, and delete data, all within a sleek and modern user interface. The project is highly customizable and can be easily adapted to suit individual needs, making it an excellent choice for businesses and organizations of all sizes. Whether you're managing a small team or a large enterprise, Nakoruru can help simplify and streamline your data management processes."
  return (
    <div className="p-4  animate-fadeIn">
      <h1 className="animate-bounce">{description}</h1>
    </div>
  );
};

export default About;
