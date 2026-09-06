import RoyalCard from "./RoyalCard.jsx";

export default function HighlightCards() {
  return (
    <section className="relative z-20 mx-auto -mt-36 max-w-350 px-10 pb-44">
      <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2">

        <RoyalCard
          title="Midnight Collection"
          description="Explore rare chocolate treasures"
          image="/images/card-midnight.jpeg"
        />

        <RoyalCard
          title="Flavor Wheel"
          description="Discover notes, intensity & character"
          image="/images/card-wheel.jpeg"
        />

        <RoyalCard
          title="The Tasting Ceremony"
          description="Indulge your senses in every bite"
          image="/images/card-ceremony.jpeg"
        />

        <RoyalCard
          title="Royal Pairings"
          description="Perfect companions for your chocolate"
          image="/images/card-pairings.jpeg"
        />

      </div>
    </section>
  );
}