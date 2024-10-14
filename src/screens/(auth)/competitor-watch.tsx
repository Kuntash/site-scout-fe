import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";
import { Route as HomeRoute } from "@/routes/(auth)/_layout/";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import useIsMobile from "@/hooks/use-is-mobile";
import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { AddCompetitorForm } from "@/modules/(auth)/competitor-watch/add-competitor-form";

export const CompetitorWatchScreen = () => {
  const isMobile = useIsMobile();

  return (
    <div className="h-full p-4">
      {/* Header with bread crumb and Add competitor button */}
      <div className="flex items-start justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={HomeRoute.fullPath}>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Competitor Watch</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Add competitor button */}
        {/* Render either drawer or dialog based on isMobile, with Add Competitor Form */}
        {isMobile ? (
          <Drawer>
            <DrawerTrigger asChild>
              <Button>
                Add Competitor <Plus className="ml-2" size={24} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-4">
              <AddCompetitorForm />
            </DrawerContent>
          </Drawer>
        ) : (
          <Dialog>
            <DialogTrigger>
              <Button>
                Add Competitor <Plus className="ml-2" size={24} />
              </Button>
            </DialogTrigger>
            <DialogContent className="transition-all duration-300">
              <AddCompetitorForm />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};
