import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
    let navigate=useNavigate();
  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div className="card" key={item.id} 
              onClick={()=>navigate(`/${item.id}`)}>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                <div className="title">
                  <h3>{item.name}</h3>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
}

export default Card;

// import React from "react";

// function Card() {
//   return (
//     <>
//       <div className="card">
//         <img src="./Images/hulk.jpg" alt="" />
//         <div className="title">
//           <h3>Hulk</h3>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;
