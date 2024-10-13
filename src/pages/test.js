import PairingCard from "@/components/PairingCard";

const TestPage = () => {
  const pairings = [
    // ... (hardcode a few pairing objects here, with _id and ingredients) ...
  ];

  return (
    <div>
      {pairings.map((pairing) => (
        <PairingCard key={pairing._id} pairing={pairing} />
      ))}
    </div>
  );
};

export default TestPage;
