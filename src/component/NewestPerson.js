import React from "react";

const OrangBaru = (props) => {
  React.useEffect(() => {
    const orangBaruNama = `${props.orangBaru.firstName} ${props.orangBaru.lastName}`;
    document.title = orangBaruNama;
    console.log("useEffect");
    return () => {
      console.log("unmounted");
    };
  }, [props.orangBaru]);
  return (
    <div className="col col-sm-12">
      <h2 className="mt-4 text-center">
        Orang Baru :{" "}
        {`${props.orangBaru.firstName} ${props.orangBaru.lastName}`}
      </h2>
    </div>
  );
};

export default OrangBaru;
