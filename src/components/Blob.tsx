const Blob = () => {
  const paths = [
    "M28.4,-49.7C36.5,-44.5,42.6,-36.3,48.3,-27.5C54,-18.8,59.2,-9.4,58.8,-0.2C58.5,8.9,52.4,17.8,46.1,25.5C39.7,33.2,33.1,39.5,25.4,48.9C17.7,58.2,8.8,70.4,-1.4,72.8C-11.6,75.1,-23.2,67.7,-36.2,61.4C-49.2,55.2,-63.7,50.1,-73.2,40.1C-82.6,30.1,-87.1,15,-81.8,3.1C-76.4,-8.9,-61.2,-17.7,-53.8,-31.3C-46.4,-44.9,-46.7,-63.1,-39,-68.6C-31.3,-74,-15.7,-66.5,-2.8,-61.8C10.1,-57,20.3,-54.9,28.4,-49.7Z",
    "M23.8,-46.1C30.8,-37.2,36.4,-30.7,42.4,-23.5C48.5,-16.2,54.9,-8.1,56.6,1C58.4,10.1,55.4,20.2,53,33.7C50.6,47.2,48.6,64,39.9,69.8C31.1,75.5,15.6,70.2,-0.2,70.5C-16,70.9,-32,77,-44,73.1C-56.1,69.3,-64.2,55.5,-67.8,41.7C-71.4,27.8,-70.6,13.9,-70.9,-0.2C-71.2,-14.3,-72.7,-28.6,-68.2,-40.9C-63.7,-53.2,-53.2,-63.6,-40.8,-69.5C-28.5,-75.3,-14.2,-76.7,-2.9,-71.6C8.4,-66.6,16.8,-55.1,23.8,-46.1Z",
    "M42.9,-73.9C56.6,-66.5,69.3,-56.9,72.6,-44.3C75.8,-31.6,69.5,-15.8,62.7,-3.9C55.9,7.9,48.6,15.9,43.4,25.1C38.2,34.4,35.1,44.9,28.2,54.6C21.4,64.3,10.7,73,-1.6,75.8C-13.9,78.7,-27.8,75.5,-39,68.3C-50.2,61.2,-58.7,50,-58.2,37.9C-57.7,25.8,-48.2,12.9,-44.9,1.9C-41.6,-9.1,-44.5,-18.2,-41.7,-24.6C-38.9,-30.9,-30.5,-34.5,-22.6,-45.3C-14.7,-56.1,-7.3,-74.1,3.7,-80.4C14.6,-86.8,29.3,-81.4,42.9,-73.9Z",
    "M46,-69.4C60.4,-71.4,73.4,-60.6,75.9,-47C78.5,-33.3,70.5,-16.6,70.1,-0.3C69.6,16.1,76.7,32.2,72.8,43.5C68.9,54.9,54,61.4,40.1,62.4C26.1,63.4,13.1,58.8,0.6,57.7C-11.8,56.6,-23.7,59.1,-37.3,57.9C-50.9,56.7,-66.2,51.9,-66.7,41.7C-67.3,31.4,-52.9,15.7,-46.6,3.7C-40.2,-8.4,-41.9,-16.8,-40,-24.6C-38.1,-32.5,-32.6,-39.7,-25.4,-41.9C-18.1,-44,-9,-41.1,3.4,-46.9C15.8,-52.8,31.6,-67.5,46,-69.4Z",
    "M26.6,-50.8C33.2,-42.2,36.4,-32.6,41.8,-23.9C47.1,-15.3,54.6,-7.6,61.6,4.1C68.7,15.8,75.3,31.6,70.2,40.5C65,49.4,48,51.5,34.3,56.1C20.6,60.6,10.3,67.6,-2.7,72.3C-15.7,76.9,-31.3,79.2,-39.8,71.6C-48.3,64.1,-49.7,46.8,-50.4,33.2C-51.2,19.6,-51.5,9.8,-56.4,-2.8C-61.3,-15.5,-70.8,-30.9,-67.5,-40.1C-64.2,-49.4,-48.1,-52.4,-34.7,-57C-21.3,-61.7,-10.7,-68,-0.3,-67.4C10,-66.8,20,-59.3,26.6,-50.8Z",
    "M37.9,-63.5C49,-59.2,57.9,-48.9,66.9,-37.3C75.9,-25.7,85.1,-12.8,84.7,-0.2C84.3,12.4,74.2,24.7,66.5,38.6C58.9,52.6,53.6,68.1,42.9,72.1C32.2,76.1,16.1,68.7,1.2,66.6C-13.7,64.6,-27.4,67.9,-36.9,63.1C-46.4,58.4,-51.7,45.7,-59.3,33.8C-67,21.9,-76.9,11,-80.4,-2C-83.9,-15,-80.8,-30,-72.6,-40.8C-64.4,-51.6,-51,-58.3,-38,-61.5C-25,-64.7,-12.5,-64.4,0.4,-65.2C13.4,-65.9,26.8,-67.7,37.9,-63.5Z",
  ];

  return (
    <div className="min-h-screen ">
      <svg
        className="absolute  -z-10 top-0 left-0 "
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={paths[1]}
          transform="translate(100 80)"
          className=" fill-pink-400   "
        ></path>
      </svg>
      <svg
        className="absolute  -z-10 top-0 right-0 "
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={paths[4]}
          transform="translate(300 100)"
          className=" fill-pink-400 opacity-80  noise"
        ></path>
      </svg>
      <svg
        className="absolute  -z-10 top-0 right-0 "
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={paths[2]}
          transform="translate(110 290)"
          className=" fill-pink-400 opacity-80  noise"
        ></path>
      </svg>
      <svg
        className="absolute  -z-10 top-0 right-0 "
        viewBox="0 0 400 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={paths[3]}
          transform="translate(310 420)"
          className=" fill-pink-400 opacity-80  noise"
        ></path>
      </svg>
      <svg
        className="absolute  -z-10 top-0 right-0 "
        viewBox="0 0 400 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={paths[5]}
          transform="translate(100 620)"
          className=" fill-pink-400 opacity-80  noise"
        ></path>
      </svg>
    </div>
  );
};

export default Blob;
