import Link from "next/link";
import Image from "next/image";

export default function LangRedirect() {
  return (
    <section>
      <div>
        <div>
          <div>
            <Link href="/en">Back To English</Link>
          </div>
        </div>
        <div>
          <Image
            src="https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg"
            alt=""
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
