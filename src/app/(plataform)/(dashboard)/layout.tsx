import { NavbarComponent } from "@/components/Navbar";

const DashboardLayout = ({children}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <NavbarComponent />
            {children}
        </div>
    )
}

export default DashboardLayout;