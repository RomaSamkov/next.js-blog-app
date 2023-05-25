import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/sova_13356.jpg"
        width={200}
        height={200}
        alt="Dave Gray"
        priority={true}
      />
    </section>
  );
}
