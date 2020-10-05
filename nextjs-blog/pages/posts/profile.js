import Link from "next/link";

export default function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <h2>
        <Link href="/">
          <a>안녕하세요</a>
        </Link>
      </h2>
    </>
  );
}
