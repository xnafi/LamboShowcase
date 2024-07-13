import { useState, useEffect } from "react";

interface Car {
  id: string;
  make: string;
  model: string;
}

const fetchData = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [carData, setCarData] = useState<Car[]>([]);
  try {
    const response = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20&refine=make%3A%22BMW%22"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: { records: Car[] } = await response.json();
    setCarData(data.records);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return carData;
};
