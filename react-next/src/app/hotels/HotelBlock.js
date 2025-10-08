"use client";
import Image from "next/image";
export default function HotelBlock({ id, name, capacity, priority = false }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{capacity}</p>
      <Image
        src={`/images/${id}.svg`}
        width={300}
        height={300}
        alt="photo"
        priority={priority}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
