import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "河南华星计量有限公司 | 新闻资讯",
  description: "河南华星计量有限公司",
};

export default function page() {
  return (
    <div className="flex mt-4 gap-3 mb-10">
      <div className="w-1/4 border-blue-300 border-2">
        <div className="border-b-2 bg-blue-500 p-2 w-full font-bold text-2xl">
          资讯类别
        </div>
        <ul className="flex flex-col gap-2 p-4">
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            电离辐射计量
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            光学计量
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            计量管理概论
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            化学计量
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            力学计量
          </li>
          <li className="border-b-gray-300 h-10 inline-flex items-center border-dashed border-b-2">
            热工计量
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-4xl mb-6">新闻资讯</h1>
        <ul className="flex flex-col gap-6 p-6">
          <li className="flex gap-1">
            <div className="w-16">04-12</div>
            <div className="flex-col">
              <Link href="#">
                <h1 className="font-bold text-blue-400 text-1xl">
                  电离辐射计量
                </h1>
              </Link>
              <p className="text-gray-400 text-wrap">
                电离辐射( IonizingRadiat ion
                )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
              </p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="w-16">04-12</div>
            <div className="flex-col">
              <Link href="#">
                <h1 className="font-bold text-blue-400 text-1xl">
                  电离辐射计量
                </h1>
              </Link>
              <p className="text-gray-400 text-wrap">
                电离辐射( IonizingRadiat ion
                )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
              </p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="w-16">04-12</div>
            <div className="flex-col">
              <Link href="#">
                <h1 className="font-bold text-blue-400 text-1xl">
                  电离辐射计量
                </h1>
              </Link>
              <p className="text-gray-400 text-wrap">
                电离辐射( IonizingRadiat ion
                )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
              </p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="w-16">04-12</div>
            <div className="flex-col">
              <Link href="#">
                <h1 className="font-bold text-blue-400 text-1xl">
                  电离辐射计量
                </h1>
              </Link>
              <p className="text-gray-400 text-wrap">
                电离辐射( IonizingRadiat ion
                )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
              </p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="w-16">04-12</div>
            <div className="flex-col">
              <Link href="#">
                <h1 className="font-bold text-blue-400 text-1xl">
                  电离辐射计量
                </h1>
              </Link>
              <p className="text-gray-400 text-wrap">
                电离辐射( IonizingRadiat ion
                )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
              </p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="w-16">04-12</div>
            <div className="flex-col">
              <Link href="#">
                <h1 className="font-bold text-blue-400 text-1xl">
                  电离辐射计量
                </h1>
              </Link>
              <p className="text-gray-400 text-wrap">
                电离辐射( IonizingRadiat ion
                )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
              </p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="w-16">04-12</div>
            <div className="flex-col">
              <Link href="#">
                <h1 className="font-bold text-blue-400 text-1xl">
                  电离辐射计量
                </h1>
              </Link>
              <p className="text-gray-400 text-wrap">
                电离辐射( IonizingRadiat ion
                )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
              </p>
            </div>
          </li>
          <li className="flex gap-1">
            <div className="w-16">04-12</div>
            <div className="flex-col">
              <Link href="#">
                <h1 className="font-bold text-blue-400 text-1xl">
                  电离辐射计量
                </h1>
              </Link>
              <p className="text-gray-400 text-wrap">
                电离辐射( IonizingRadiat ion
                )是指能够足以使原子离子化的、由微粒、射线或光子所发出的辐射。它可以影响...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
