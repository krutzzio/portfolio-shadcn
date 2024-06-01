
import { Button } from "@/components/ui/button"
import { AlignJustify } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavbarMenu() {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button><AlignJustify /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-50 bg-background">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        About me
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Projects
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Skills and tools
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Contact
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

