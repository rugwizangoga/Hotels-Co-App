'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { forwardRef, useCallback} from "react";

import useCountries from "../hooks/useCountries";

import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
   data: any;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
};

const ListingCard = forwardRef<HTMLDivElement, ListingCardProps>((
    {
      data,
      onAction,
      disabled,
      actionLabel,
      actionId = '',
    },
    ref
  ) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

  return (
    <div 
      onClick={() => router.push(`/listings/${data.id}`)} 
      className="col-span-1 cursor-pointer group flex flex-col gap-2"
      ref={ref}
    >
        <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          />
          <div className="
            absolute
            top-3
            right-3
          ">
            <HeartButton 
            />
          </div>
        </div>
        <div className="flex flex-col">
        <div className="font-semibold text-sm p-0">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500 p-0 text-sm">
          {data.category}
        </div>
        <div className="font-semibold text-sm p-0">
            $ {data.price}/night
        </div>
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
    </div>
   );
}
)
export default ListingCard;