import { fetchAnnual } from "@/api/reports/reports.api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ReportType from "@/types/reports/ReportsTypes";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

const Annual = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<ReportType[]>([]);
    const [colors] = useState([
        "bg-green-100 text-green-800",
        "bg-blue-100 text-blue-800",
        "bg-purple-100 text-purple-800"
    ])

    const takeRandomColor = (): string => {
        return colors[Math.floor(Math.random() * 3)];
    }

    const fetch = async () => {
        try {
            const response = await fetchAnnual();
            setData(response)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (loading)
            fetch();
    }, [loading]);


    return <>
        <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Annual Summary
                </CardTitle>
                <CardDescription>Year-end performance overview</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {data.map(d => {
                        return <div className="flex items-center justify-between">
                            <span className="text-sm">{d.name}</span>
                            <Badge variant="secondary" className={takeRandomColor()}>
                                {d.value}
                            </Badge>
                        </div>
                    })}
                </div>
            </CardContent>
        </Card>
    </>
}

export default Annual;