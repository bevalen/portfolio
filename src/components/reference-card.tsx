import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  name: string;
  title: string;
  company: string;
  description: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function ReferenceCard({
  name,
  title,
  company,
  description,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={name} className="object-contain" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <h2 className="font-semibold leading-none">{name}</h2>
        <p className="text-sm text-muted-foreground">{title} at {company}</p>
        <span className="prose dark:prose-invert text-sm text-muted-foreground">
          {description}
        </span>
      </div>
      {links && links.length > 0 && (
        <ul className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href} target="_blank">
                <Badge title={link.title} className="flex gap-2">
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
