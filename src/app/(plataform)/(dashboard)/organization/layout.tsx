import { NavbarComponent } from "@/app/components/Navbar";

const OrganizationLayout = ({children}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full p-10 container mx-auto">
            {children}
        </div>
    )
}

export default OrganizationLayout;