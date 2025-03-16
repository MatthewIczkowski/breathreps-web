
export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-4xl font-bold">BreathReps</h1>
        </div>
        <h2 className="text-2xl italic">Master your breathing</h2>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-xl italic">*App Store Link Coming Soon*</p>
      </footer> */}
    </div>
  );
}
