import { NavLink } from "react-router";

export default function StyledNavLink({to, text}: {to: string, text: string}) {
    return (
        <NavLink 
            to={to}
            className={(({isActive}) => 
                isActive ? "border-b-4 border-blue-500 text-blue-500"
                : ""
        )}>
            {text}
        </NavLink>
    );
}