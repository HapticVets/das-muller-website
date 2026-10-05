const reviews = [
  {
    name: "Russell Hathaway",
    quote: "Excellent results. Now I have peace of mind.",
  },
  {
    name: "Tony Villarreal",
    quote: "World class. Would recommend 100%.",
  },
  {
    name: "Daniel Simms",
    quote: "Great experience! Very professional and trustworthy.",
  },
];

const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Patriot%20K9%20Command%20Leetonia%20OH";

export default function GoogleReviews() {
  return (
    <section className="border-y border-neutral-900 bg-neutral-900/35">
      <div className="section-shell-tight">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Google Reviews</p>
            <h2 className="section-title">Trusted by Dog Owners</h2>
            <p className="section-copy">
              Real feedback from clients who trusted Patriot K9 Command with
              their dogs.
            </p>
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="action-secondary shrink-0"
          >
            5.0 ★ · Read all 8 Google reviews
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure className="surface-card p-7" key={review.name}>
              <div aria-label="5 out of 5 stars" className="text-lg tracking-[0.18em] text-amber-400">
                ★★★★★
              </div>
              <blockquote className="mt-5 text-lg leading-8 text-white">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-neutral-400">
                {review.name} · Google review
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
