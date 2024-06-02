
import { Button } from "@/components/ui/button"
import { AlignJustify } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavbarMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button><AlignJustify /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen md:w-64  bg-background ">
                <DropdownMenuGroup className="m-4 flex flex-col justify-center items-center gap-4 ">
                    <DropdownMenuItem>
                        <a className="lg:text-[1.42vw] hover:text-principal" href="#aboutme">
                            About me
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className="lg:text-[1.42vw] hover:text-principal" href="#projects">
                            Projects
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className="lg:text-[1.42vw] hover:text-principal" href="#skills">
                            Skills and tools
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className="lg:text-[1.42vw] hover:text-principal" href="#contact">
                            Contact
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

