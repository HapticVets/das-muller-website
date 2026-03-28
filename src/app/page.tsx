"use client";

import Header from "@/components/Header";

export default function Home() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      housing: formData.get("housing"),
      fencedYard: formData.get("fencedYard"),
      householdSize: formData.get("householdSize"),
      childrenAges: formData.get("childrenAges"),
      householdAnimals: formData.get("householdAnimals"),
      householdRoutine: formData.get("householdRoutine"),
      ownedGsdBefore: formData.get("ownedGsdBefore"),
      raisedPuppyBefore: formData.get("raisedPuppyBefore"),
      structuredTraining: formData.get("structuredTraining"),
      experienceLevel: formData.get("experienceLevel"),
      experience: formData.get("experience"),
      primaryGoal: formData.get("primaryGoal"),
      homeActivityLevel: formData.get("homeActivityLevel"),
      aloneHours: formData.get("aloneHours"),
      dailyExercise: formData.get("dailyExercise"),
      whyGsd: formData.get("whyGsd"),
      idealDogRole: formData.get("idealDogRole"),
      preferredEnergy: formData.get("preferredEnergy"),
      preferredConfidence: formData.get("preferredConfidence"),
      preferredSocialStyle: formData.get("preferredSocialStyle"),
      preferredTrainingStyle: formData.get("preferredTrainingStyle"),
      preferredTraits: formData.get("preferredTraits"),
      crateTrain: formData.get("crateTrain"),
      maintainStructure: formData.get("maintainStructure"),
      openToTraining: formData.get("openToTraining"),
      preparedForCosts: formData.get("preparedForCosts"),
      finalNotes: formData.get("finalNotes"),
    };

    try {
      const res = await fetch("/api/puppy-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        alert("Application submitted successfully.");
        form.reset();
      } else {
        alert("Something went wrong submitting the application.");
        console.error(result);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong submitting the application.");
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-amber-400">
              Das Müller Kennel
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Purpose-bred German Shepherds.
              <br />
              Structured training.
              <br />
              Veteran-driven mission.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Das Müller is being built as a premium German Shepherd kennel and
              training brand focused on quality dogs, obedience, owner support,
              and a mission that gives back.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#programs"
                className="rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-black hover:opacity-90"
              >
                View Programs
              </a>

              <a
                href="#application"
                className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold text-white hover:bg-neutral-900"
              >
                Puppy Application
              </a>
            </div>
          </div>
        </section>

        <section
          id="programs"
          className="border-t border-neutral-900 bg-neutral-900/40"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
                Programs
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Built around dogs with purpose.
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
                From puppy placement to obedience development, Das Müller is
                structured to serve families, working homes, and owners who want
                clarity, communication, and standards.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <h3 className="text-2xl font-semibold">
                  German Shepherd Puppies
                </h3>
                <p className="mt-4 text-neutral-300">
                  Purpose-bred puppies matched to the right homes.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <h3 className="text-2xl font-semibold">
                  Dog Training Programs
                </h3>
                <p className="mt-4 text-neutral-300">
                  Structured obedience and real-world reliability.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <h3 className="text-2xl font-semibold">Veteran Mission</h3>
                <p className="mt-4 text-neutral-300">
                  Long-term placement of dogs with veterans.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="border-t border-neutral-900">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2 lg:px-12">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
                Mission
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                More than a kennel.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-neutral-300">
              <p>
                Das Müller is built on standards, discipline, and long-term
                purpose—developing dogs and supporting owners the right way.
              </p>

              <p>
                The goal is to create reliable dogs and place them with homes
                that are truly prepared for the breed, the structure, and the
                responsibility that comes with a German Shepherd.
              </p>
            </div>
          </div>
        </section>

        <section
          id="application"
          className="border-t border-neutral-900 bg-neutral-900/40"
        >
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
                Puppy Application
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                Apply for the right puppy, not just any puppy.
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
                We evaluate puppies weekly beginning at week 5 so we can make
                better placement decisions. This application helps us understand
                your home, experience, goals, and the type of dog that will fit
                your family best.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-12 space-y-10">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                    Section 1
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Basic Information
                  </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <input name="name" type="text" placeholder="Full Name" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" required />
                  <input name="email" type="email" placeholder="Email Address" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" required />
                  <input name="phone" type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" required />
                  <input name="location" type="text" placeholder="City and State" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" required />
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-400">Section 2</p>
                  <h3 className="mt-2 text-2xl font-semibold">Household Profile</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <select name="housing" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" required defaultValue="">
                    <option value="" disabled>Do you rent or own your home?</option>
                    <option>Own</option>
                    <option>Rent</option>
                  </select>

                  <select name="fencedYard" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" required defaultValue="">
                    <option value="" disabled>Do you have a fenced yard?</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Partially</option>
                  </select>

                  <input name="householdSize" type="text" placeholder="How many people live in the home?" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                  <input name="childrenAges" type="text" placeholder="Ages of children in the home (if any)" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <textarea name="householdAnimals" placeholder="Tell us about any other dogs or animals in the home" rows={4} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                  <textarea name="householdRoutine" placeholder="Tell us about your household environment and daily routine" rows={4} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-400">Section 3</p>
                  <h3 className="mt-2 text-2xl font-semibold">Experience Level</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <select name="ownedGsdBefore" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Have you owned a German Shepherd before?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <select name="raisedPuppyBefore" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Have you raised a puppy before?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <select name="structuredTraining" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Have you worked with structured dog training?</option>
                    <option>Yes</option>
                    <option>A little</option>
                    <option>No</option>
                  </select>

                  <select name="experienceLevel" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>How would you describe your experience level?</option>
                    <option>First-time owner</option>
                    <option>Some experience</option>
                    <option>Experienced owner</option>
                    <option>Experienced working-dog home</option>
                  </select>
                </div>

                <div className="mt-6">
                  <textarea name="experience" placeholder="Tell us about your past dog ownership and training experience" rows={5} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-400">Section 4</p>
                  <h3 className="mt-2 text-2xl font-semibold">Goals for the Dog</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <select name="primaryGoal" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>What are you mainly looking for?</option>
                    <option>Family companion</option>
                    <option>Active family dog</option>
                    <option>Protection-minded home dog</option>
                    <option>Training prospect</option>
                    <option>Service prospect</option>
                    <option>Working prospect</option>
                  </select>

                  <select name="homeActivityLevel" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>How active is your home?</option>
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>High</option>
                  </select>

                  <input name="aloneHours" type="text" placeholder="How many hours will the dog be alone each day?" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                  <input name="dailyExercise" type="text" placeholder="How much daily exercise do you realistically plan to provide?" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <textarea name="whyGsd" placeholder="Why do you want a German Shepherd specifically?" rows={4} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                  <textarea name="idealDogRole" placeholder="Describe your ideal dog and what role it will have in your life" rows={4} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-400">Section 5</p>
                  <h3 className="mt-2 text-2xl font-semibold">Temperament Preference</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <select name="preferredEnergy" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Preferred energy level</option>
                    <option>Lower / easier going</option>
                    <option>Moderate / balanced</option>
                    <option>High drive / highly active</option>
                  </select>

                  <select name="preferredConfidence" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Preferred confidence level</option>
                    <option>Soft and easier to handle</option>
                    <option>Balanced confidence</option>
                    <option>Bold and very confident</option>
                  </select>

                  <select name="preferredSocialStyle" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Preferred social style</option>
                    <option>Very social and outgoing</option>
                    <option>Balanced / neutral</option>
                    <option>More reserved and watchful</option>
                  </select>

                  <select name="preferredTrainingStyle" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Preferred training style</option>
                    <option>Easy companion dog</option>
                    <option>Trainable family dog</option>
                    <option>Strong working potential</option>
                  </select>
                </div>

                <div className="mt-6">
                  <textarea name="preferredTraits" placeholder="Tell us what traits matter most to you in a puppy" rows={5} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-400">Section 6</p>
                  <h3 className="mt-2 text-2xl font-semibold">Commitment and Placement Standards</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <select name="crateTrain" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Are you willing to crate train?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <select name="maintainStructure" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Are you willing to maintain structure and obedience?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <select name="openToTraining" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Are you open to training guidance or a training program?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <select name="preparedForCosts" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white focus:outline-none" defaultValue="">
                    <option value="" disabled>Are you prepared for the ongoing cost of a large breed dog?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="mt-6">
                  <textarea name="finalNotes" placeholder="Anything else you want us to know about your home, goals, or ideal puppy?" rows={5} className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none" />
                </div>
              </div>

              <button type="submit" className="w-full rounded-2xl bg-amber-500 px-6 py-4 text-lg font-semibold text-black hover:opacity-90">
                Submit Puppy Application
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}