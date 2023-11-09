import Hardware from "@/components/hardware";
import Software from "@/components/software";

export default function Repairs (){
    return(
        <main className="flex-1 space-x-0">
            <Software />
            <Hardware />
        </main>
    )
}