import Container from "@/components/Container";

const getData = async () => {
  const res = await fetch(
    `https://api.jsonbin.io/v3/b/654d037d54105e766fcda5be`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2a$10$hjHv8iPI8aTzXSKIDGNctO/wSPA3MHwtfT.62e8FeGNWdr76/52Re",
        "X-Access-Key":
          "$2a$10$xvU0lB9uj5OhssJ86zsm/uDnI8T5rJzkgo2sfAoA.FvAbJUuPPtd.",
      },
    }
  );
  const data = await res.json();
  return data;
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getData();
  return <Container dinero={data}></Container>;
}
