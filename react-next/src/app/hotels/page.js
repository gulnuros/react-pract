import HotelBlock from "./HotelBlock";
async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <h1>A page about mountains</h1>

      <div>
        {data.map((hotel, index) => (
          <HotelBlock
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            capacity={hotel.capacity}
            priority={index < 3}
          />
        ))}
      </div>
    </main>
  );
}
