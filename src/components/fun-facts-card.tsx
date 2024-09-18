import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";

interface FunFactCardProps {
    fact: string;
    delay: number;
}

export function FunFactCard({ fact, delay }: FunFactCardProps) {
    return (
        <BlurFade delay={delay}>
            <Card className="h-full">
                <CardContent className="flex items-center p-4">
                    <Icons.sparkles className="mr-2 h-4 w-4 flex-shrink-0" />
                    <p className="text-sm">{fact}</p>
                </CardContent>
            </Card>
        </BlurFade>
    );
}