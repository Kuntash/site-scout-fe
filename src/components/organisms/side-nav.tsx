import useIsMobile from "@/hooks/use-is-mobile";
import { useState } from "react";
import { Activity, House, Menu, X } from "lucide-react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

type NavItemProps = {
  icon: React.ReactNode;
  text: string;
  isExpanded: boolean;
  id: string;
};

export const NAV_ITEMS: Omit<NavItemProps, "isExpanded">[] = [
  {
    icon: <House size={24} className="group-hover/house:text-primary" />,
    text: "Dashboard",
    id: "/",
  },
  {
    icon: <Activity size={24} className="group-hover/house:text-primary" />,
    text: "Competitor Watch",
    id: "/competitor-watch",
  },
];

const NavItem = (props: NavItemProps) => {
  const { icon, text, isExpanded, id } = props;

  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to: id });

  return (
    <li
      key={id}
      className={cn(
        "group/house hover:bg-accent w-full p-2 rounded-lg ",
        isActive && "bg-accent"
      )}
    >
      <Link to={id}>
        <div className="flex gap-x-4 items-center">
          {icon}
          {isExpanded && (
            <span className="group-hover/house:text-primary text-sm">
              {text}
            </span>
          )}
        </div>
      </Link>
    </li>
  );
};

export const SideNav = () => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(!isMobile);

  const toggleNav = () => setIsExpanded(!isExpanded);

  return (
    <Card
      className={`h-full rounded-xl border bg-card text-card-foreground shadow transition-all duration-300 p-2
    ${isExpanded ? "w-[300px]" : "w-[60px]"}`}
    >
      <div
        className={`text-center flex ${
          isExpanded ? "justify-end" : "justify-center"
        } mb-2`}
      >
        <button onClick={toggleNav} className="hover:bg-accent p-2 rounded-lg">
          {isExpanded ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <ul
        className={`text-center flex flex-col gap-y-2 ${
          isExpanded ? "items-start" : "items-center"
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            isExpanded={isExpanded}
            id={item.id}
          />
        ))}
      </ul>
    </Card>
  );
};
