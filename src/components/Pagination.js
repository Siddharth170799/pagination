import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [Length, setLength] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const buttons = [];

  const api = async () => {
    try {
      const details = await axios.get("https://fakestoreapi.com/products/");
      setData(details.data);
      setLength(details.data.length);
      const details1 = details.data.slice(0, itemsPerPage);
      setFilteredData(details1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pages = Length / itemsPerPage;
  const totalPages = Math.ceil(pages);

  for (let i = 1; i <= totalPages; i++) {
    buttons.push(i);
  }
  const fetchDetails = (item) => {
    const endIndex = item * itemsPerPage;
    const startIndex = item == 1 ? item - 1 : endIndex - itemsPerPage;
    const data1 = data.slice(startIndex, endIndex);
    setFilteredData(data1);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredData.length > 0
          ? filteredData.map((item) => (
              <div
                key={item.id}
                style={{
                  width: "250px",
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                  {item.title}
                </h3>
                <p style={{ fontWeight: "bold", color: "#4caf50" }}>
                  ${item.price}
                </p>
              </div>
            ))
          : data.map((item) => (
              <div
                key={item.id}
                style={{
                  width: "250px",
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                  {item.title}
                </h3>
                <p style={{ fontWeight: "bold", color: "#4caf50" }}>
                  ${item.price}
                </p>
              </div>
            ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {buttons.map((item) => {
          return (
            <button
              key={item}
              style={{
                padding: "10px 20px",
                border: "1px solid #4caf50",
                borderRadius: "5px",
                backgroundColor: "#4caf50",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onClick={() => fetchDetails(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
