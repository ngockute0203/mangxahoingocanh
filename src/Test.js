// import * as React from "react";
// import { useState } from "react";
// const Test = () => {
//   const initial_data = [
//     {
//       id: 1,
//       name: "john",
//       gender: "m",
//       status: false
//     },
//     {
//       id: 2,
//       name: "mary",
//       gender: "f",
//       status: false
//     },
//   ];

//   const [datas, setDatas] = useState(initial_data);
//   console.log(datas);
//   return (
//     <div>
//       danh sach chua chon
//     {datas.map((data, index) => (
//       data.status === false ?
//       <li key={index}>
//         <input
//           type="text"
//           value={data.name}
//           onChange={(e) => {
//             data.status = true;
//             setDatas([...datas]);
//           }}
//         />
//       </li>
//       :
//      ""
//     ))}
//     <br />
//       danh sach đã chon
//     {datas.map((data, index) => (
//       data.status === true ?
//       <li key={index}>
//         {data.name}
//       </li>
//       :
//      ""
//     ))}
//   </div>
//   );
// };

// export default Test;


import "antd/dist/antd.css";
import { Select } from "antd";
import { useState } from "react";

const Test = () => {
    const { Option } = Select;
    const initial_data = [
        {
            id: 1,
            name: "john",
            gender: "m",
            status: false
        },
        {
            id: 2,
            name: "mary",
            gender: "f",
            status: false
        },
    ];

    const [datas, setDatas] = useState(initial_data);
    return (
        <div className="" style={{ width: "40%", margin: "auto" }}>
            <p>Danh sách tìm kiếm</p>
            <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select"
                // defaultValue={["a10", "c12"]}
                // onChange={handleChange}
                onClick={(value) => {
                        
                }}
            >
                {datas.map((data, index) => (
                    data.status === false ?
                        <Option key={index}
                        >
                            <p className="trenhet"
                            onClick={(e) => {
                                data.status = true;
                                setDatas([...datas]);
                                console.log(datas);
                                alert("N.0.A")
                            }
                            }
                            >{data.name}</p>
                        </Option>
                        :
                        ""
                ))}
            </Select>
            <br />
            danh sach đã chon
            {datas.map((data, index) => (
                data.status === true ?
                    <li key={index}>
                        {data.name}
                    </li>
                    :
                    ""
            ))}
        </div>
    );
};

export default Test;