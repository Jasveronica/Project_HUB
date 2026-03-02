import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={getImgPath("/images/logo/logo-icon.svg")}
        alt="logo"
        width={400}
        height={70}
        style={{ width: "auto", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
