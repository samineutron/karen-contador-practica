"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

const Container = ({ dinero }) => {
  const [plata, setPlata] = useState(dinero.record.plata);

  const updateData = async (addPlata, suma) => {
    const total = suma ? plata + addPlata : plata - addPlata;
    console.log(total);
    if (
      total === 10000 ||
      total === 20000 ||
      total === 30000 ||
      total === 40000 ||
      total === 50000 ||
      total === 60000 ||
      total === 70000 ||
      total === 80000 ||
      total === 90000
    ) {
      confetti({
        particleCount: 70,
        spread: 70,
      });
    } else if (total === 100000) {
      confetti({
        particleCount: 120,
        spread: 70,
      });
    }
    console.log(plata);
    setPlata(total);

    const json = {
      method: "PUT",
      body: JSON.stringify({ plata: total }),
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2a$10$hjHv8iPI8aTzXSKIDGNctO/wSPA3MHwtfT.62e8FeGNWdr76/52Re",
        "X-Access-Key":
          "$2a$10$xvU0lB9uj5OhssJ86zsm/uDnI8T5rJzkgo2sfAoA.FvAbJUuPPtd.",
      },
    };
    const res = await fetch(
      `https://api.jsonbin.io/v3/b/654d037d54105e766fcda5be`,
      json
    );
    const data = await res.json();
    console.log(total);
    console.log(plata);
    return data;
  };

  return (
    <main className="flex px-4 justify-center items-center mt-12 ">
      <div className="rounded-xl p-10 lg:w-3/6 bg-pink-300">
        <h1 className=" my-4 text-center font-bold text-2xl drop-shadow-lg">
          Plata acumulada para cumpleaños Karen 🤑🥵
        </h1>
        <h3 className="my-4 drop-shadow-lg text-center font-bold text-5xl text-purple-100 py-5 tracking-wider ">
          {plata}
        </h3>
        <div className="my-4 grid grid-cols-1  sm:grid-cols-2 2xl:grid-cols-4 gap-4 justify-between">
          <Button
            className="text-white font-bold border border-teal-50"
            size="lg"
            color="success"
            variant="shadow"
            onPress={() => updateData(1000, true)}
          >
            +$1000
          </Button>
          <Button
            className="text-white font-bold border border-teal-50"
            size="lg"
            color="success"
            variant="shadow"
            onPress={() => updateData(2000, true)}
          >
            +$2000
          </Button>
          <Button
            className="text-white font-bold border border-teal-50"
            size="lg"
            color="danger"
            variant="shadow"
            onPress={() => updateData(1000, false)}
          >
            -$1000
          </Button>
          <Button
            className="text-white font-bold border border-teal-50"
            size="lg"
            color="danger"
            variant="shadow"
            onPress={() => updateData(2000, false)}
          >
            -$2000
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Container;
