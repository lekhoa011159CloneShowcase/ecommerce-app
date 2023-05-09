import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { DangerBadge } from "./Badges";
import Rating from "./Rating";

type Props = {
  item: Product;
  bordered?: boolean;
  showRating?: boolean;
};

export default function ProductItem({
  item,
  bordered,
  showRating = true,
}: Props) {
  return (
    <Link
      href={`/product/${item.slug}`}
      className={`p-6 group ${bordered ? "border-b border-r" : ""}`}
    >
      <div className="w-full overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          fill
          priority
          src={item.imageSrc}
          alt={item.imageAlt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center w-full h-full group-hover:opacity-75"
        />
      </div>

      {/* name */}
      <h3 className="mt-4 font-medium text-gray-700 line-clamp-1">
        {item.name}
      </h3>

      {/* description summary */}
      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
        {item.description}
      </p>

      <div className="flex items-center justify-between w-full mt-8">
        <div className="flex items-center">
          {/* Raw price */}
          <p className={`mr-4 ${item.discount > 0 ? "line-through" : ""}`}>
            ${item.rawPrice}
          </p>

          {/* Price & discount rate */}
          {item.discount > 0 && (
            <p className="flex items-center text-red-500">
              <span>${item.price}</span>
              <DangerBadge>-{item.discount}%</DangerBadge>
            </p>
          )}
        </div>

        {/* Rating */}
        {showRating && (
          <div className="flex items-center">
            <span className="mr-1">{item.rating}</span>
            <Rating condense />
          </div>
        )}
      </div>
    </Link>
  );
}