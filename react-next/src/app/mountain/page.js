async function getData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <main>
        <h1>Hotels</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((hotel) => (
              <tr key={hotel.id}></tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
