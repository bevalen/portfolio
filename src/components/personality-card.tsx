import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icons } from "@/components/icons";

export interface PersonalityType {
    type: string;
    title: string;
    url: string;
    description: string;
    attributes: readonly string[];
}

interface PersonalityCardProps {
    name: string;
    personality: PersonalityType;
}

export function PersonalityCard({ name, personality }: PersonalityCardProps) {
    return (
        <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
            <CardHeader className="p-6">
                <div className="space-y-1">
                    <CardTitle className="text-lg">{name.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</CardTitle>
                    <div className="text-sm text-muted-foreground">{personality.title}</div>
                    <Badge variant="outline" className="mt-2">
                        {personality.type}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="px-6">
                <p className="text-sm text-muted-foreground">{personality.description}</p>
                {personality.attributes && personality.attributes.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1">
                        {personality.attributes.map((attribute) => (
                            <Badge
                                className="px-1 py-0 text-[10px]"
                                variant="secondary"
                                key={attribute}
                            >
                                {attribute}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="mt-auto p-6">
                <Link href={personality.url} target="_blank">
                    <Badge className="flex items-center gap-1">
                        <Icons.globe className="size-3" />
                        <span>Read More</span>
                    </Badge>
                </Link>
            </CardFooter>
        </Card>
    );
}